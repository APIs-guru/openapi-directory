from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LocalControllerStateInstallationStateEnum(str, Enum):
    INSTALLATION_STATE_UNSPECIFIED = "INSTALLATION_STATE_UNSPECIFIED"
    INSTALLATION_STATE_NOT_INSTALLED = "INSTALLATION_STATE_NOT_INSTALLED"
    INSTALLATION_STATE_INSTALLED = "INSTALLATION_STATE_INSTALLED"
    INSTALLATION_STATE_FAILED = "INSTALLATION_STATE_FAILED"


@dataclass_json
@dataclass
class LocalControllerState:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    installation_state: Optional[LocalControllerStateInstallationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installationState' }})
    
