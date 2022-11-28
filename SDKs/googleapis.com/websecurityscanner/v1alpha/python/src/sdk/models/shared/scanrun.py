from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScanRunExecutionStateEnum(str, Enum):
    EXECUTION_STATE_UNSPECIFIED = "EXECUTION_STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    SCANNING = "SCANNING"
    FINISHED = "FINISHED"

class ScanRunResultStateEnum(str, Enum):
    RESULT_STATE_UNSPECIFIED = "RESULT_STATE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"
    KILLED = "KILLED"


@dataclass_json
@dataclass
class ScanRun:
    r"""ScanRun
    A ScanRun is a output-only resource representing an actual run of the scan.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    execution_state: Optional[ScanRunExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionState') }})
    has_vulnerabilities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVulnerabilities') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressPercent') }})
    result_state: Optional[ScanRunResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultState') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    urls_crawled_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlsCrawledCount') }})
    urls_tested_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlsTestedCount') }})
    
