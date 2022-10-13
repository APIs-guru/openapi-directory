from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountStateStatusEnum(str, Enum):
    ACCOUNT_STATUS_UNSPECIFIED = "ACCOUNT_STATUS_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFICATION_REQUESTED = "VERIFICATION_REQUESTED"


@dataclass_json
@dataclass
class AccountState:
    status: Optional[AccountStateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
