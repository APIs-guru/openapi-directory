from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ScanRunWarningTraceCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    INSUFFICIENT_CRAWL_RESULTS = "INSUFFICIENT_CRAWL_RESULTS"
    TOO_MANY_CRAWL_RESULTS = "TOO_MANY_CRAWL_RESULTS"
    TOO_MANY_FUZZ_TASKS = "TOO_MANY_FUZZ_TASKS"
    BLOCKED_BY_IAP = "BLOCKED_BY_IAP"
    NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN = "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN"


@dataclass_json
@dataclass
class ScanRunWarningTrace:
    code: Optional[ScanRunWarningTraceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
