from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edgelocation
from . import endpointinfo
from . import status
from . import latencydistribution

class ProbingDetailsAbortCauseEnum(str, Enum):
    PROBING_ABORT_CAUSE_UNSPECIFIED = "PROBING_ABORT_CAUSE_UNSPECIFIED"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    NO_SOURCE_LOCATION = "NO_SOURCE_LOCATION"

class ProbingDetailsResultEnum(str, Enum):
    PROBING_RESULT_UNSPECIFIED = "PROBING_RESULT_UNSPECIFIED"
    REACHABLE = "REACHABLE"
    UNREACHABLE = "UNREACHABLE"
    REACHABILITY_INCONSISTENT = "REACHABILITY_INCONSISTENT"
    UNDETERMINED = "UNDETERMINED"


@dataclass_json
@dataclass
class ProbingDetails:
    abort_cause: Optional[ProbingDetailsAbortCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortCause' }})
    destination_egress_location: Optional[edgelocation.EdgeLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationEgressLocation' }})
    endpoint_info: Optional[endpointinfo.EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointInfo' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    probing_latency: Optional[latencydistribution.LatencyDistribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probingLatency' }})
    result: Optional[ProbingDetailsResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    sent_probe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentProbeCount' }})
    successful_probe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successfulProbeCount' }})
    verify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyTime' }})
    
