from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserDualPasswordTypeEnum(str, Enum):
    DUAL_PASSWORD_TYPE_UNSPECIFIED = "DUAL_PASSWORD_TYPE_UNSPECIFIED"
    NO_MODIFY_DUAL_PASSWORD = "NO_MODIFY_DUAL_PASSWORD"
    NO_DUAL_PASSWORD = "NO_DUAL_PASSWORD"
    DUAL_PASSWORD = "DUAL_PASSWORD"

class UserTypeEnum(str, Enum):
    BUILT_IN = "BUILT_IN"
    CLOUD_IAM_USER = "CLOUD_IAM_USER"
    CLOUD_IAM_SERVICE_ACCOUNT = "CLOUD_IAM_SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class User:
    r"""User
    A Cloud SQL user resource.
    """
    
    dual_password_type: Optional[UserDualPasswordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dualPasswordType') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_policy: Optional[UserPasswordValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPolicy') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    sqlserver_user_details: Optional[SQLServerUserDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlserverUserDetails') }})
    type: Optional[UserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
