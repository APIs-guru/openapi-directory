from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NiCallerIdentityCallerTypeEnum(str, Enum):
    BUSINESS = "business"
    CONSUMER = "consumer"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class NiCallerIdentity:
    caller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_name' }})
    caller_type: Optional[NiCallerIdentityCallerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_type' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    
