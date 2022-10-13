from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DataAccessOptionsLogModeEnum(str, Enum):
    LOG_MODE_UNSPECIFIED = "LOG_MODE_UNSPECIFIED"
    LOG_FAIL_CLOSED = "LOG_FAIL_CLOSED"


@dataclass_json
@dataclass
class DataAccessOptions:
    log_mode: Optional[DataAccessOptionsLogModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logMode' }})
    
