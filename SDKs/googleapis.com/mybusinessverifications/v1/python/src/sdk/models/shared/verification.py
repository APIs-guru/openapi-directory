from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VerificationMethodEnum(str, Enum):
    VERIFICATION_METHOD_UNSPECIFIED = "VERIFICATION_METHOD_UNSPECIFIED"
    ADDRESS = "ADDRESS"
    EMAIL = "EMAIL"
    PHONE_CALL = "PHONE_CALL"
    SMS = "SMS"
    AUTO = "AUTO"
    VETTED_PARTNER = "VETTED_PARTNER"

class VerificationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class Verification:
    r"""Verification
    A verification represents a verification attempt on a location.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    method: Optional[VerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[VerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
