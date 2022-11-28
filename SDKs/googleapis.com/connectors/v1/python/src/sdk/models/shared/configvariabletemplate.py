from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigVariableTemplateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DEPRECATED = "DEPRECATED"

class ConfigVariableTemplateValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    STRING = "STRING"
    INT = "INT"
    BOOL = "BOOL"
    SECRET = "SECRET"
    ENUM = "ENUM"
    AUTHORIZATION_CODE = "AUTHORIZATION_CODE"


@dataclass_json
@dataclass
class ConfigVariableTemplate:
    r"""ConfigVariableTemplate
    ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
    """
    
    authorization_code_link: Optional[AuthorizationCodeLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationCodeLink') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enum_options: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumOptions') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    role_grant: Optional[RoleGrant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrant') }})
    state: Optional[ConfigVariableTemplateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    validation_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationRegex') }})
    value_type: Optional[ConfigVariableTemplateValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
