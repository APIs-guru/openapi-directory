from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2entitytypeentity

class GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum(str, Enum):
    AUTO_EXPANSION_MODE_UNSPECIFIED = "AUTO_EXPANSION_MODE_UNSPECIFIED"
    AUTO_EXPANSION_MODE_DEFAULT = "AUTO_EXPANSION_MODE_DEFAULT"

class GoogleCloudDialogflowV2EntityTypeKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    KIND_MAP = "KIND_MAP"
    KIND_LIST = "KIND_LIST"
    KIND_REGEXP = "KIND_REGEXP"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EntityType:
    auto_expansion_mode: Optional[GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoExpansionMode' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_fuzzy_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableFuzzyExtraction' }})
    entities: Optional[List[googleclouddialogflowv2entitytypeentity.GoogleCloudDialogflowV2EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    kind: Optional[GoogleCloudDialogflowV2EntityTypeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
