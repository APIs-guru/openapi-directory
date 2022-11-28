from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ProbingDetails
    Results of active probing from the last run of the test.
    """
    
    abort_cause: Optional[ProbingDetailsAbortCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortCause') }})
    destination_egress_location: Optional[EdgeLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationEgressLocation') }})
    endpoint_info: Optional[EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointInfo') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    probing_latency: Optional[LatencyDistribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probingLatency') }})
    result: Optional[ProbingDetailsResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    sent_probe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentProbeCount') }})
    successful_probe_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successfulProbeCount') }})
    verify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyTime') }})
    
