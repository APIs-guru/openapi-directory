from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TestStatusStatusEnum(str, Enum):
    TEST_STATUS_UNSPECIFIED = "TEST_STATUS_UNSPECIFIED"
    COMPLETE = "COMPLETE"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    PAGE_UNREACHABLE = "PAGE_UNREACHABLE"


@dataclass_json
@dataclass
class TestStatus:
    r"""TestStatus
    Final state of the test, including error details if necessary.
    """
    
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    status: Optional[TestStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
