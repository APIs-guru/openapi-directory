from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import passwordstatus


@dataclass_json
@dataclass
class UserPasswordValidationPolicy:
    allowed_failed_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedFailedAttempts' }})
    enable_failed_attempts_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableFailedAttemptsCheck' }})
    enable_password_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePasswordVerification' }})
    password_expiration_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordExpirationDuration' }})
    status: Optional[passwordstatus.PasswordStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
