from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EndpointPolicyTypeEnum(str, Enum):
    ENDPOINT_POLICY_TYPE_UNSPECIFIED = "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
    SIDECAR_PROXY = "SIDECAR_PROXY"
    GRPC_SERVER = "GRPC_SERVER"


@dataclass_json
@dataclass
class EndpointPolicyInput:
    r"""EndpointPolicyInput
    EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply \"authentication config\" an all endpoints that serve on port 8080.
    """
    
    authorization_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationPolicy') }})
    client_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTlsPolicy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    endpoint_matcher: Optional[EndpointMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointMatcher') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverTlsPolicy') }})
    traffic_port_selector: Optional[TrafficPortSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficPortSelector') }})
    type: Optional[EndpointPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class EndpointPolicy:
    r"""EndpointPolicy
    EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply \"authentication config\" an all endpoints that serve on port 8080.
    """
    
    authorization_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationPolicy') }})
    client_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTlsPolicy') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    endpoint_matcher: Optional[EndpointMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointMatcher') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_tls_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverTlsPolicy') }})
    traffic_port_selector: Optional[TrafficPortSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficPortSelector') }})
    type: Optional[EndpointPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
