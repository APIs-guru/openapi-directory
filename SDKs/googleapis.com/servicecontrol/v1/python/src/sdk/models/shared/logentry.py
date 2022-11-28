from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LogEntrySeverityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEBUG = "DEBUG"
    INFO = "INFO"
    NOTICE = "NOTICE"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"
    ALERT = "ALERT"
    EMERGENCY = "EMERGENCY"


@dataclass_json
@dataclass
class LogEntry:
    r"""LogEntry
    An individual log entry.
    """
    
    http_request: Optional[HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    insert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertId') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[LogEntryOperation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    proto_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protoPayload') }})
    severity: Optional[LogEntrySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_location: Optional[LogEntrySourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLocation') }})
    struct_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structPayload') }})
    text_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textPayload') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trace') }})
    
