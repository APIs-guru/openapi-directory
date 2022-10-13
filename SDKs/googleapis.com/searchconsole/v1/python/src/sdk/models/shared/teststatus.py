from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TestStatusStatusEnum(str, Enum):
    TEST_STATUS_UNSPECIFIED = "TEST_STATUS_UNSPECIFIED"
    COMPLETE = "COMPLETE"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    PAGE_UNREACHABLE = "PAGE_UNREACHABLE"


@dataclass_json
@dataclass
class TestStatus:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    status: Optional[TestStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
