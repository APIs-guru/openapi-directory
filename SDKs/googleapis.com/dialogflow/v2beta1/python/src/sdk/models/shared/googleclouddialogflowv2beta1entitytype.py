from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1entitytypeentity

class GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum(str, Enum):
    AUTO_EXPANSION_MODE_UNSPECIFIED = "AUTO_EXPANSION_MODE_UNSPECIFIED"
    AUTO_EXPANSION_MODE_DEFAULT = "AUTO_EXPANSION_MODE_DEFAULT"

class GoogleCloudDialogflowV2beta1EntityTypeKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    KIND_MAP = "KIND_MAP"
    KIND_LIST = "KIND_LIST"
    KIND_REGEXP = "KIND_REGEXP"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EntityType:
    auto_expansion_mode: Optional[GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoExpansionMode' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_fuzzy_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableFuzzyExtraction' }})
    entities: Optional[List[googleclouddialogflowv2beta1entitytypeentity.GoogleCloudDialogflowV2beta1EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    kind: Optional[GoogleCloudDialogflowV2beta1EntityTypeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
