from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configvariabletemplate

class AuthConfigTemplateAuthTypeEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER_PASSWORD = "USER_PASSWORD"
    OAUTH2_JWT_BEARER = "OAUTH2_JWT_BEARER"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    SSH_PUBLIC_KEY = "SSH_PUBLIC_KEY"
    OAUTH2_AUTH_CODE_FLOW = "OAUTH2_AUTH_CODE_FLOW"


@dataclass_json
@dataclass
class AuthConfigTemplate:
    auth_type: Optional[AuthConfigTemplateAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    config_variable_templates: Optional[List[configvariabletemplate.ConfigVariableTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configVariableTemplates' }})
    
