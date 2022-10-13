from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostFloatingIpsRequestBodyTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PostFloatingIpsRequestBodyCreateFloatingIPRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    home_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_location' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostFloatingIpsRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostFloatingIpsRequest:
    request: Optional[PostFloatingIpsRequestBodyCreateFloatingIPRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFloatingIps201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostFloatingIps201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostFloatingIps201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostFloatingIps201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPHomeLocation:
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PostFloatingIps201ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIP:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dns_ptr: List[PostFloatingIps201ApplicationJSONFloatingIPDNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    home_location: PostFloatingIps201ApplicationJSONFloatingIPHomeLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_location' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: PostFloatingIps201ApplicationJSONFloatingIPProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    server: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PostFloatingIps201ApplicationJSONFloatingIPTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSON:
    action: Optional[PostFloatingIps201ApplicationJSONActionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    floating_ip: PostFloatingIps201ApplicationJSONFloatingIP = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ip' }})
    

@dataclass
class PostFloatingIpsResponse:
    content_type: str = field(default=None)
    post_floating_ips_201_application_json_object: Optional[PostFloatingIps201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
