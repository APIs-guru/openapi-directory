from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PasswordValidationPolicyComplexityEnum(str, Enum):
    COMPLEXITY_UNSPECIFIED = "COMPLEXITY_UNSPECIFIED"
    COMPLEXITY_DEFAULT = "COMPLEXITY_DEFAULT"


@dataclass_json
@dataclass
class PasswordValidationPolicy:
    complexity: Optional[PasswordValidationPolicyComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complexity' }})
    disallow_username_substring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disallowUsernameSubstring' }})
    enable_password_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePasswordPolicy' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    password_change_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordChangeInterval' }})
    reuse_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reuseInterval' }})
    
