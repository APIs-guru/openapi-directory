from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DataExecutionStatusErrorCodeEnum(str, Enum):
    DATA_EXECUTION_ERROR_CODE_UNSPECIFIED = "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED"
    TIMED_OUT = "TIMED_OUT"
    TOO_MANY_ROWS = "TOO_MANY_ROWS"
    TOO_MANY_COLUMNS = "TOO_MANY_COLUMNS"
    TOO_MANY_CELLS = "TOO_MANY_CELLS"
    ENGINE = "ENGINE"
    PARAMETER_INVALID = "PARAMETER_INVALID"
    UNSUPPORTED_DATA_TYPE = "UNSUPPORTED_DATA_TYPE"
    DUPLICATE_COLUMN_NAMES = "DUPLICATE_COLUMN_NAMES"
    INTERRUPTED = "INTERRUPTED"
    CONCURRENT_QUERY = "CONCURRENT_QUERY"
    OTHER = "OTHER"
    TOO_MANY_CHARS_PER_CELL = "TOO_MANY_CHARS_PER_CELL"
    DATA_NOT_FOUND = "DATA_NOT_FOUND"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    MISSING_COLUMN_ALIAS = "MISSING_COLUMN_ALIAS"
    OBJECT_NOT_FOUND = "OBJECT_NOT_FOUND"
    OBJECT_IN_ERROR_STATE = "OBJECT_IN_ERROR_STATE"
    OBJECT_SPEC_INVALID = "OBJECT_SPEC_INVALID"

class DataExecutionStatusStateEnum(str, Enum):
    DATA_EXECUTION_STATE_UNSPECIFIED = "DATA_EXECUTION_STATE_UNSPECIFIED"
    NOT_STARTED = "NOT_STARTED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class DataExecutionStatus:
    error_code: Optional[DataExecutionStatusErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTime' }})
    state: Optional[DataExecutionStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
