from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportfailure

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
    failure: Optional[reportfailure.ReportFailure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure' }})
    finish_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishTimeMs' }})
    format: Optional[ReportStatusFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    state: Optional[ReportStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
