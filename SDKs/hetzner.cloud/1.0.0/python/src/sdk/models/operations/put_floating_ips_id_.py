from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutFloatingIpsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFloatingIpsIDUpdateFloatingIPRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutFloatingIpsIDRequest:
    path_params: PutFloatingIpsIDPathParams = field(default=None)
    request: Optional[PutFloatingIpsIDUpdateFloatingIPRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation:
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
class PutFloatingIpsID200ApplicationJSONFloatingIPProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIP:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dns_ptr: List[PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    home_location: PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_location' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: PutFloatingIpsID200ApplicationJSONFloatingIPProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    server: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSON:
    floating_ip: PutFloatingIpsID200ApplicationJSONFloatingIP = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ip' }})
    

@dataclass
class PutFloatingIpsIDResponse:
    content_type: str = field(default=None)
    put_floating_ips_id_200_application_json_object: Optional[PutFloatingIpsID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
