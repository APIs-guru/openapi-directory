from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserPasswordValidationPolicy:
    r"""UserPasswordValidationPolicy
    User level password validation policy.
    """
    
    allowed_failed_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedFailedAttempts') }})
    enable_failed_attempts_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFailedAttemptsCheck') }})
    enable_password_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePasswordVerification') }})
    password_expiration_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpirationDuration') }})
    status: Optional[PasswordStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
