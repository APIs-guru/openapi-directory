from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReportStatusFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL_CSV = "EXCEL_CSV"
    XLSX = "XLSX"

class ReportStatusStateEnum(str, Enum):
    RUNNING = "RUNNING"
    DONE = "DONE"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ReportStatus:
    r"""ReportStatus
    Report status.
    """
    
    failure: Optional[ReportFailure] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure') }})
    finish_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishTimeMs') }})
    format: Optional[ReportStatusFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    state: Optional[ReportStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
