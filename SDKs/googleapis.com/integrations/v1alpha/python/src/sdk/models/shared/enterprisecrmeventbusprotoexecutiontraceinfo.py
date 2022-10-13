from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoExecutionTraceInfo:
    parent_event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentEventExecutionInfoId' }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceId' }})
    
