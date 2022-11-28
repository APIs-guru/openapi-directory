from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SearchErrorResponseStatusEnum(str, Enum):
    IN_PROGRESS = "IN PROGRESS"
    FAILED = "FAILED"
    EXPIRED = "EXPIRED"
    CANCELLED = "CANCELLED"
    ONE_HUNDRED_AND_ONE = "101"


@dataclass_json
@dataclass
class SearchErrorResponse:
    r"""SearchErrorResponse
    Error
    """
    
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_text') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    status: Optional[SearchErrorResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
