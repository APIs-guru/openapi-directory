from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutLoadBalancersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutLoadBalancersIDRequestBody:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutLoadBalancersIDRequest:
    path_params: PutLoadBalancersIDPathParams = field(default=None)
    request: Optional[PutLoadBalancersIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm:
    type: PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_assigned_certificates: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_assigned_certificates' }})
    max_connections: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    max_services: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_services' }})
    max_targets: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_targets' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLocation:
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
class PutLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ipv4: PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck:
    http: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets:
    health_status: Optional[List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    server: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget:
    health_status: Optional[List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    ip: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    targets: Optional[List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    type: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSONLoadBalancer:
    algorithm: PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    included_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancer_type: PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_type' }})
    location: PutLoadBalancersID200ApplicationJSONLoadBalancerLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    private_net: List[PutLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: PutLoadBalancersID200ApplicationJSONLoadBalancerProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    services: List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    targets: List[PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass_json
@dataclass
class PutLoadBalancersID200ApplicationJSON:
    load_balancer: PutLoadBalancersID200ApplicationJSONLoadBalancer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer' }})
    

@dataclass
class PutLoadBalancersIDResponse:
    content_type: str = field(default=None)
    put_load_balancers_id_200_application_json_object: Optional[PutLoadBalancersID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
