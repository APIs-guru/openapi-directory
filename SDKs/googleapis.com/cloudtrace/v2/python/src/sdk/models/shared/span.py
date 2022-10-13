from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributes
from . import truncatablestring
from . import links
from . import stacktrace
from . import status
from . import timeevents

class SpanSpanKindEnum(str, Enum):
    SPAN_KIND_UNSPECIFIED = "SPAN_KIND_UNSPECIFIED"
    INTERNAL = "INTERNAL"
    SERVER = "SERVER"
    CLIENT = "CLIENT"
    PRODUCER = "PRODUCER"
    CONSUMER = "CONSUMER"


@dataclass_json
@dataclass
class Span:
    attributes: Optional[attributes.Attributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    child_span_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childSpanCount' }})
    display_name: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSpanId' }})
    same_process_as_parent_span: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sameProcessAsParentSpan' }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanId' }})
    span_kind: Optional[SpanSpanKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanKind' }})
    stack_trace: Optional[stacktrace.StackTrace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackTrace' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time_events: Optional[timeevents.TimeEvents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeEvents' }})
    
