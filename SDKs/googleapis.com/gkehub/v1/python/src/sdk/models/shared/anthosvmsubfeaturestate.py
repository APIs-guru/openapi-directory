from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class AnthosVMSubFeatureStateInstallationStateEnum(str, Enum):
    INSTALLATION_STATE_UNSPECIFIED = "INSTALLATION_STATE_UNSPECIFIED"
    INSTALLATION_STATE_NOT_INSTALLED = "INSTALLATION_STATE_NOT_INSTALLED"
    INSTALLATION_STATE_INSTALLED = "INSTALLATION_STATE_INSTALLED"
    INSTALLATION_STATE_FAILED = "INSTALLATION_STATE_FAILED"


@dataclass_json
@dataclass
class AnthosVMSubFeatureState:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    installation_state: Optional[AnthosVMSubFeatureStateInstallationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installationState' }})
    migrate_state: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrateState' }})
    service_mesh_state: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceMeshState' }})
    
