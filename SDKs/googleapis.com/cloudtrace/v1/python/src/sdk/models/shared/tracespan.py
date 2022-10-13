from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TraceSpanKindEnum(str, Enum):
    SPAN_KIND_UNSPECIFIED = "SPAN_KIND_UNSPECIFIED"
    RPC_SERVER = "RPC_SERVER"
    RPC_CLIENT = "RPC_CLIENT"


@dataclass_json
@dataclass
class TraceSpan:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    kind: Optional[TraceSpanKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSpanId' }})
    span_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanId' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
