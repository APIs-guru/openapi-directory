from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLocation:
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerProtection:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet
    Public network information
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets:
    health_status: Optional[List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget:
    type: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancer:
    algorithm: GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: GetLoadBalancersID200ApplicationJSONLoadBalancerLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: List[GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetLoadBalancersID200ApplicationJSONLoadBalancerProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: List[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersID200ApplicationJSON:
    load_balancer: GetLoadBalancersID200ApplicationJSONLoadBalancer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer') }})
    

@dataclass
class GetLoadBalancersIDRequest:
    path_params: GetLoadBalancersIDPathParams = field()
    

@dataclass
class GetLoadBalancersIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_load_balancers_id_200_application_json_object: Optional[GetLoadBalancersID200ApplicationJSON] = field(default=None)
    
