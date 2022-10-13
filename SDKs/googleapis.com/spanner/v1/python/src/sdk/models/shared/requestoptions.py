from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RequestOptionsPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    PRIORITY_LOW = "PRIORITY_LOW"
    PRIORITY_MEDIUM = "PRIORITY_MEDIUM"
    PRIORITY_HIGH = "PRIORITY_HIGH"


@dataclass_json
@dataclass
class RequestOptions:
    priority: Optional[RequestOptionsPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    request_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTag' }})
    transaction_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionTag' }})
    
