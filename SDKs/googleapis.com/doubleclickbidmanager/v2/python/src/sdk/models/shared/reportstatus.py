from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReportStatusFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    CSV = "CSV"
    XLSX = "XLSX"

class ReportStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    DONE = "DONE"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ReportStatus:
    r"""ReportStatus
    Report status.
    """
    
    finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishTime') }})
    format: Optional[ReportStatusFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    state: Optional[ReportStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
