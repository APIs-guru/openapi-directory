from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetLoadBalancersSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"


@dataclass
class GetLoadBalancersQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetLoadBalancersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoadBalancersRequest:
    query_params: GetLoadBalancersQueryParams = field(default=None)
    
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm:
    type: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_assigned_certificates: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_assigned_certificates' }})
    max_connections: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    max_services: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_services' }})
    max_targets: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_targets' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLocation:
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
class GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ipv4: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck:
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets:
    health_status: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget:
    health_status: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    ip: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    targets: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancers:
    algorithm: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    included_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancer_type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_type' }})
    location: GetLoadBalancers200ApplicationJSONLoadBalancersLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    private_net: List[GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: GetLoadBalancers200ApplicationJSONLoadBalancersProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    services: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    targets: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONMeta:
    pagination: GetLoadBalancers200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSON:
    load_balancers: List[GetLoadBalancers200ApplicationJSONLoadBalancers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    meta: Optional[GetLoadBalancers200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetLoadBalancersResponse:
    content_type: str = field(default=None)
    get_load_balancers_200_application_json_object: Optional[GetLoadBalancers200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
