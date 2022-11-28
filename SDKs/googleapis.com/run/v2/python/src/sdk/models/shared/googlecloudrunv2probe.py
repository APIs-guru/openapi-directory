from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2Probe:
    r"""GoogleCloudRunV2Probe
    Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
    """
    
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThreshold') }})
    grpc: Optional[GoogleCloudRunV2GrpcAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http_get: Optional[GoogleCloudRunV2HTTPGetAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpGet') }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDelaySeconds') }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodSeconds') }})
    tcp_socket: Optional[GoogleCloudRunV2TCPSocketAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpSocket') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    
