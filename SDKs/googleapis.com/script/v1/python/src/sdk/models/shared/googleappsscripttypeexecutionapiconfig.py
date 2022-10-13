from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsScriptTypeExecutionAPIConfigAccessEnum(str, Enum):
    UNKNOWN_ACCESS = "UNKNOWN_ACCESS"
    MYSELF = "MYSELF"
    DOMAIN = "DOMAIN"
    ANYONE = "ANYONE"
    ANYONE_ANONYMOUS = "ANYONE_ANONYMOUS"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeExecutionAPIConfig:
    access: Optional[GoogleAppsScriptTypeExecutionAPIConfigAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    
