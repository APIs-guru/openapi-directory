from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigManagementBinauthzStateWebhookEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementBinauthzState:
    r"""ConfigManagementBinauthzState
    State for Binauthz
    """
    
    version: Optional[ConfigManagementBinauthzVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    webhook: Optional[ConfigManagementBinauthzStateWebhookEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
