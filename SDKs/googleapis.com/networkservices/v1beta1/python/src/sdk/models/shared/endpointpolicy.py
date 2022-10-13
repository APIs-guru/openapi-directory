from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import endpointmatcher
from . import trafficportselector

class EndpointPolicyTypeEnum(str, Enum):
    ENDPOINT_POLICY_TYPE_UNSPECIFIED = "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
    SIDECAR_PROXY = "SIDECAR_PROXY"
    GRPC_SERVER = "GRPC_SERVER"


@dataclass_json
@dataclass
class EndpointPolicy:
    authorization_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationPolicy' }})
    client_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientTlsPolicy' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    endpoint_matcher: Optional[endpointmatcher.EndpointMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointMatcher' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverTlsPolicy' }})
    traffic_port_selector: Optional[trafficportselector.TrafficPortSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficPortSelector' }})
    type: Optional[EndpointPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
