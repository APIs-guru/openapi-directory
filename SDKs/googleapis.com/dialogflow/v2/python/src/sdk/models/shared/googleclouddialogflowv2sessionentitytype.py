from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2entitytypeentity

class GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum(str, Enum):
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    ENTITY_OVERRIDE_MODE_OVERRIDE = "ENTITY_OVERRIDE_MODE_OVERRIDE"
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SessionEntityType:
    entities: Optional[List[googleclouddialogflowv2entitytypeentity.GoogleCloudDialogflowV2EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_override_mode: Optional[GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityOverrideMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
