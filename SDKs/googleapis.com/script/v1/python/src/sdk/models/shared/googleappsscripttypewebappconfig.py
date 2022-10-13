from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsScriptTypeWebAppConfigAccessEnum(str, Enum):
    UNKNOWN_ACCESS = "UNKNOWN_ACCESS"
    MYSELF = "MYSELF"
    DOMAIN = "DOMAIN"
    ANYONE = "ANYONE"
    ANYONE_ANONYMOUS = "ANYONE_ANONYMOUS"

class GoogleAppsScriptTypeWebAppConfigExecuteAsEnum(str, Enum):
    UNKNOWN_EXECUTE_AS = "UNKNOWN_EXECUTE_AS"
    USER_ACCESSING = "USER_ACCESSING"
    USER_DEPLOYING = "USER_DEPLOYING"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeWebAppConfig:
    access: Optional[GoogleAppsScriptTypeWebAppConfigAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    execute_as: Optional[GoogleAppsScriptTypeWebAppConfigExecuteAsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executeAs' }})
    
