from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import httprequest
from . import logentryoperation
from . import logentrysourcelocation

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
    http_request: Optional[httprequest.HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRequest' }})
    insert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertId' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[logentryoperation.LogEntryOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    proto_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoPayload' }})
    severity: Optional[LogEntrySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    source_location: Optional[logentrysourcelocation.LogEntrySourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLocation' }})
    struct_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structPayload' }})
    text_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textPayload' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trace' }})
    
