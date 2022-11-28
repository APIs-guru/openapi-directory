from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoExecutionTraceInfo:
    r"""EnterpriseCrmEventbusProtoExecutionTraceInfo
    Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
    """
    
    parent_event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentEventExecutionInfoId') }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceId') }})
    
