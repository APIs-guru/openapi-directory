from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RequestOptionsPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    PRIORITY_LOW = "PRIORITY_LOW"
    PRIORITY_MEDIUM = "PRIORITY_MEDIUM"
    PRIORITY_HIGH = "PRIORITY_HIGH"


@dataclass_json
@dataclass
class RequestOptions:
    r"""RequestOptions
    Common request options for various APIs.
    """
    
    priority: Optional[RequestOptionsPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    request_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTag') }})
    transaction_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionTag') }})
    
