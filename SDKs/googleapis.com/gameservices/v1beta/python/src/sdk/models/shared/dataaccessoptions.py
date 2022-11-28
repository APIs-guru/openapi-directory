from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DataAccessOptionsLogModeEnum(str, Enum):
    LOG_MODE_UNSPECIFIED = "LOG_MODE_UNSPECIFIED"
    LOG_FAIL_CLOSED = "LOG_FAIL_CLOSED"


@dataclass_json
@dataclass
class DataAccessOptions:
    r"""DataAccessOptions
    Write a Data Access (Gin) log
    """
    
    log_mode: Optional[DataAccessOptionsLogModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logMode') }})
    
