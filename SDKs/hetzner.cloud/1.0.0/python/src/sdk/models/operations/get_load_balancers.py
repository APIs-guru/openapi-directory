from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLocation:
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
class GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersProtection:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet
    Public network information
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService:
    destination_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets:
    health_status: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget:
    type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancers:
    algorithm: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: GetLoadBalancers200ApplicationJSONLoadBalancersLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: List[GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetLoadBalancers200ApplicationJSONLoadBalancersProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: List[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSONMeta:
    pagination: GetLoadBalancers200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetLoadBalancers200ApplicationJSON:
    load_balancers: List[GetLoadBalancers200ApplicationJSONLoadBalancers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    meta: Optional[GetLoadBalancers200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetLoadBalancersRequest:
    query_params: GetLoadBalancersQueryParams = field()
    

@dataclass
class GetLoadBalancersResponse:
    content_type: str = field()
    status_code: int = field()
    get_load_balancers_200_application_json_object: Optional[GetLoadBalancers200ApplicationJSON] = field(default=None)
    
