from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import trace

class ReachabilityDetailsResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    REACHABLE = "REACHABLE"
    UNREACHABLE = "UNREACHABLE"
    AMBIGUOUS = "AMBIGUOUS"
    UNDETERMINED = "UNDETERMINED"


@dataclass_json
@dataclass
class ReachabilityDetails:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    result: Optional[ReachabilityDetailsResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    traces: Optional[List[trace.Trace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traces' }})
    verify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyTime' }})
    
