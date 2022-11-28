from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Span
    A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
    """
    
    attributes: Optional[Attributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    child_span_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childSpanCount') }})
    display_name: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSpanId') }})
    same_process_as_parent_span: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sameProcessAsParentSpan') }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanId') }})
    span_kind: Optional[SpanSpanKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanKind') }})
    stack_trace: Optional[StackTrace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTrace') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_events: Optional[TimeEvents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeEvents') }})
    
