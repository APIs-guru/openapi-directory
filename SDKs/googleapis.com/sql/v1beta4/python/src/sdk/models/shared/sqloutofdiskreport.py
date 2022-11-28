from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SQLOutOfDiskReportSQLOutOfDiskStateEnum(str, Enum):
    SQL_OUT_OF_DISK_STATE_UNSPECIFIED = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
    NORMAL = "NORMAL"
    SOFT_SHUTDOWN = "SOFT_SHUTDOWN"


@dataclass_json
@dataclass
class SQLOutOfDiskReport:
    r"""SQLOutOfDiskReport
    This message wraps up the information written by out-of-disk detection job.
    """
    
    sql_min_recommended_increase_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlMinRecommendedIncreaseSizeGb') }})
    sql_out_of_disk_state: Optional[SQLOutOfDiskReportSQLOutOfDiskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlOutOfDiskState') }})
    
