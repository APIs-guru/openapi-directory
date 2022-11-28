from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLabels:
    r"""PostLoadBalancersCreateLoadBalancerRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets:
    health_status: Optional[List[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget:
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[List[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[List[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancersCreateLoadBalancerRequest:
    algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    load_balancer_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    labels: Optional[PostLoadBalancersCreateLoadBalancerRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    public_interface: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_interface') }})
    services: Optional[List[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: Optional[List[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONActionError:
    r"""PostLoadBalancers201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancers201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancers201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostLoadBalancers201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancers201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLocation:
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
class PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerProtection:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet
    Public network information
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets:
    health_status: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget:
    type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancer:
    algorithm: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: PostLoadBalancers201ApplicationJSONLoadBalancerLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: List[PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: PostLoadBalancers201ApplicationJSONLoadBalancerProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: List[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclass
class PostLoadBalancers201ApplicationJSON:
    action: PostLoadBalancers201ApplicationJSONAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    load_balancer: PostLoadBalancers201ApplicationJSONLoadBalancer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer') }})
    

@dataclass
class PostLoadBalancersRequest:
    request: Optional[PostLoadBalancersCreateLoadBalancerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoadBalancersResponse:
    content_type: str = field()
    status_code: int = field()
    post_load_balancers_201_application_json_object: Optional[PostLoadBalancers201ApplicationJSON] = field(default=None)
    
