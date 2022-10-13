from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishTime' }})
    format: Optional[ReportStatusFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    state: Optional[ReportStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
