from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NiCallerIdentityCallerTypeEnum(str, Enum):
    BUSINESS = "business"
    CONSUMER = "consumer"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class NiCallerIdentity:
    r"""NiCallerIdentity
    Information about the network `number` is currently connected to.
    """
    
    caller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_name') }})
    caller_type: Optional[NiCallerIdentityCallerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_type') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    
