from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1entitytypeentity

class GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum(str, Enum):
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    ENTITY_OVERRIDE_MODE_OVERRIDE = "ENTITY_OVERRIDE_MODE_OVERRIDE"
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SessionEntityType:
    entities: Optional[List[googleclouddialogflowcxv3beta1entitytypeentity.GoogleCloudDialogflowCxV3beta1EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_override_mode: Optional[GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityOverrideMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
