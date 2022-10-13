from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    method: Optional[VerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[VerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
