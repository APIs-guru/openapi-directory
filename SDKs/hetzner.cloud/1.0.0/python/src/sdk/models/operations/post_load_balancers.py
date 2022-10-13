from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PostLoadBalancersRequestBodyAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyAlgorithmLoadBalancerAlgorithm:
    type: PostLoadBalancersRequestBodyAlgorithmTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyLabels:
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelkey' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyServicesHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyServicesHealthCheckLoadBalancerServiceHealthCheck:
    http: Optional[PostLoadBalancersRequestBodyServicesHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyServicesHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PostLoadBalancersRequestBodyServicesProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyServicesLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PostLoadBalancersRequestBodyServicesHealthCheckLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PostLoadBalancersRequestBodyServicesHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PostLoadBalancersRequestBodyServicesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsServerLoadBalancerTargetServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsTargetsServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsTargets:
    health_status: Optional[List[PostLoadBalancersRequestBodyTargetsTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    server: Optional[PostLoadBalancersRequestBodyTargetsTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    
class PostLoadBalancersRequestBodyTargetsTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyTargetsLoadBalancerTarget:
    health_status: Optional[List[PostLoadBalancersRequestBodyTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    ip: Optional[PostLoadBalancersRequestBodyTargetsIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PostLoadBalancersRequestBodyTargetsLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostLoadBalancersRequestBodyTargetsServerLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    targets: Optional[List[PostLoadBalancersRequestBodyTargetsTargets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    type: PostLoadBalancersRequestBodyTargetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancersRequestBodyCreateLoadBalancerRequest:
    algorithm: PostLoadBalancersRequestBodyAlgorithmLoadBalancerAlgorithm = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    labels: Optional[PostLoadBalancersRequestBodyLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancer_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_type' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    public_interface: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_interface' }})
    services: Optional[List[PostLoadBalancersRequestBodyServicesLoadBalancerService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    targets: Optional[List[PostLoadBalancersRequestBodyTargetsLoadBalancerTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass
class PostLoadBalancersRequest:
    request: Optional[PostLoadBalancersRequestBodyCreateLoadBalancerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostLoadBalancers201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostLoadBalancers201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostLoadBalancers201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostLoadBalancers201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm:
    type: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_assigned_certificates: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_assigned_certificates' }})
    max_connections: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    max_services: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_services' }})
    max_targets: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_targets' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLocation:
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
class PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6:
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ipv4: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckHTTP:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_codes' }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck:
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesHTTP:
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    cookie_lifetime: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_lifetime' }})
    cookie_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie_name' }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_http' }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky_sessions' }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerServicesLoadBalancerService:
    destination_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_port' }})
    health_check: PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerServicesHTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    listen_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    proxyprotocol: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyprotocol' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_port' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargets:
    health_status: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLoadBalancerTarget:
    health_status: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_status' }})
    ip: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    label_selector: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    targets: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    type: PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_private_ip' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancer:
    algorithm: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    included_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancer_type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_type' }})
    location: PostLoadBalancers201ApplicationJSONLoadBalancerLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    private_net: List[PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: PostLoadBalancers201ApplicationJSONLoadBalancerProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    services: List[PostLoadBalancers201ApplicationJSONLoadBalancerServicesLoadBalancerService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    targets: List[PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLoadBalancerTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSON:
    action: PostLoadBalancers201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    load_balancer: PostLoadBalancers201ApplicationJSONLoadBalancer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer' }})
    

@dataclass
class PostLoadBalancersResponse:
    content_type: str = field(default=None)
    post_load_balancers_201_application_json_object: Optional[PostLoadBalancers201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
