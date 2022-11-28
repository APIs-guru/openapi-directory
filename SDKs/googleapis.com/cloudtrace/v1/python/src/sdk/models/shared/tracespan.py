from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TraceSpanKindEnum(str, Enum):
    SPAN_KIND_UNSPECIFIED = "SPAN_KIND_UNSPECIFIED"
    RPC_SERVER = "RPC_SERVER"
    RPC_CLIENT = "RPC_CLIENT"


@dataclass_json
@dataclass
class TraceSpan:
    r"""TraceSpan
    A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    kind: Optional[TraceSpanKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSpanId') }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanId') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
