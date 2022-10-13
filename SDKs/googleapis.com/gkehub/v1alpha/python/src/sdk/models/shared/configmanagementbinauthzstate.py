from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configmanagementbinauthzversion

class ConfigManagementBinauthzStateWebhookEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementBinauthzState:
    version: Optional[configmanagementbinauthzversion.ConfigManagementBinauthzVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    webhook: Optional[ConfigManagementBinauthzStateWebhookEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
