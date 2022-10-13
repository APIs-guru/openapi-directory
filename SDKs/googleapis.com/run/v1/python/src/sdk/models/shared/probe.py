from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import execaction
from . import grpcaction
from . import httpgetaction
from . import tcpsocketaction


@dataclass_json
@dataclass
class Probe:
    exec: Optional[execaction.ExecAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exec' }})
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureThreshold' }})
    grpc: Optional[grpcaction.GrpcAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpc' }})
    http_get: Optional[httpgetaction.HTTPGetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpGet' }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialDelaySeconds' }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodSeconds' }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successThreshold' }})
    tcp_socket: Optional[tcpsocketaction.TCPSocketAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpSocket' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    
