from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import httprequest
from . import monitoredresourcemetadata
from . import logentryoperation
from . import monitoredresource
from . import logentrysourcelocation
from . import logsplit

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
    json_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonPayload' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    log_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logName' }})
    metadata: Optional[monitoredresourcemetadata.MonitoredResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    operation: Optional[logentryoperation.LogEntryOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    proto_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoPayload' }})
    receive_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiveTimestamp' }})
    resource: Optional[monitoredresource.MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    severity: Optional[LogEntrySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    source_location: Optional[logentrysourcelocation.LogEntrySourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLocation' }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanId' }})
    split: Optional[logsplit.LogSplit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'split' }})
    text_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textPayload' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trace' }})
    trace_sampled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceSampled' }})
    
