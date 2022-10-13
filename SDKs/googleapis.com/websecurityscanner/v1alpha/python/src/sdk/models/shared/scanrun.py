from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    execution_state: Optional[ScanRunExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionState' }})
    has_vulnerabilities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasVulnerabilities' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressPercent' }})
    result_state: Optional[ScanRunResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultState' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    urls_crawled_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlsCrawledCount' }})
    urls_tested_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlsTestedCount' }})
    
