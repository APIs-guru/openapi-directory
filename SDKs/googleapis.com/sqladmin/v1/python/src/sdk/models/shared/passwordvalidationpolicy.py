from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PasswordValidationPolicyComplexityEnum(str, Enum):
    COMPLEXITY_UNSPECIFIED = "COMPLEXITY_UNSPECIFIED"
    COMPLEXITY_DEFAULT = "COMPLEXITY_DEFAULT"


@dataclass_json
@dataclass
class PasswordValidationPolicy:
    r"""PasswordValidationPolicy
    Database instance local user password validation policy
    """
    
    complexity: Optional[PasswordValidationPolicyComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complexity') }})
    disallow_username_substring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowUsernameSubstring') }})
    enable_password_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePasswordPolicy') }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    password_change_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordChangeInterval') }})
    reuse_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reuseInterval') }})
    
