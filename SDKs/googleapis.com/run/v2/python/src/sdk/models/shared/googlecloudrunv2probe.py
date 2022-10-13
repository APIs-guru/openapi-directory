from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2grpcaction
from . import googlecloudrunv2httpgetaction
from . import googlecloudrunv2tcpsocketaction


@dataclass_json
@dataclass
class GoogleCloudRunV2Probe:
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureThreshold' }})
    grpc: Optional[googlecloudrunv2grpcaction.GoogleCloudRunV2GrpcAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpc' }})
    http_get: Optional[googlecloudrunv2httpgetaction.GoogleCloudRunV2HTTPGetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpGet' }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialDelaySeconds' }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodSeconds' }})
    tcp_socket: Optional[googlecloudrunv2tcpsocketaction.GoogleCloudRunV2TCPSocketAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpSocket' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    
