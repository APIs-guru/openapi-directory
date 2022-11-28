from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsScriptTypeExecutionAPIConfigAccessEnum(str, Enum):
    UNKNOWN_ACCESS = "UNKNOWN_ACCESS"
    MYSELF = "MYSELF"
    DOMAIN = "DOMAIN"
    ANYONE = "ANYONE"
    ANYONE_ANONYMOUS = "ANYONE_ANONYMOUS"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeExecutionAPIConfig:
    r"""GoogleAppsScriptTypeExecutionAPIConfig
    API executable entry point configuration.
    """
    
    access: Optional[GoogleAppsScriptTypeExecutionAPIConfigAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    
