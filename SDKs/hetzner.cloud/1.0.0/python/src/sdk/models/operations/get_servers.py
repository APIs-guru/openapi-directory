from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetServersSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetServersStatusEnum(str, Enum):
    INITIALIZING = "initializing"
    STARTING = "starting"
    RUNNING = "running"
    STOPPING = "stopping"
    OFF = "off"
    DELETING = "deleting"
    REBUILDING = "rebuilding"
    MIGRATING = "migrating"
    UNKNOWN = "unknown"


@dataclass
class GetServersQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetServersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetServersStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONMeta:
    pagination: GetServers200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersDatacenterLocation:
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
class GetServers200ApplicationJSONServersDatacenterServerTypes:
    r"""GetServers200ApplicationJSONServersDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersDatacenter:
    r"""GetServers200ApplicationJSONServersDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetServers200ApplicationJSONServersDatacenterLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetServers200ApplicationJSONServersDatacenterServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersImageCreatedFrom:
    r"""GetServers200ApplicationJSONServersImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetServers200ApplicationJSONServersImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersImageProtection:
    r"""GetServers200ApplicationJSONServersImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetServers200ApplicationJSONServersImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetServers200ApplicationJSONServersImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersImage:
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetServers200ApplicationJSONServersImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetServers200ApplicationJSONServersImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetServers200ApplicationJSONServersImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetServers200ApplicationJSONServersImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetServers200ApplicationJSONServersImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class GetServers200ApplicationJSONServersIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersIso:
    r"""GetServers200ApplicationJSONServersIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetServers200ApplicationJSONServersIsoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPlacementGroupNullable:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersProtection:
    r"""GetServers200ApplicationJSONServersProtection
    Protection configuration for the Server
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv4:
    r"""GetServers200ApplicationJSONServersPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6:
    r"""GetServers200ApplicationJSONServersPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: List[GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNet:
    r"""GetServers200ApplicationJSONServersPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: GetServers200ApplicationJSONServersPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetServers200ApplicationJSONServersPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[List[GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class GetServers200ApplicationJSONServersServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceHourly:
    r"""GetServers200ApplicationJSONServersServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceMonthly:
    r"""GetServers200ApplicationJSONServersServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServers200ApplicationJSONServersServerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServers200ApplicationJSONServersServerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServers200ApplicationJSONServersServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerType:
    r"""GetServers200ApplicationJSONServersServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServers200ApplicationJSONServersServerTypeCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetServers200ApplicationJSONServersServerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServers200ApplicationJSONServersServerTypeStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
class GetServers200ApplicationJSONServersStatusEnum(str, Enum):
    RUNNING = "running"
    INITIALIZING = "initializing"
    STARTING = "starting"
    STOPPING = "stopping"
    OFF = "off"
    DELETING = "deleting"
    MIGRATING = "migrating"
    REBUILDING = "rebuilding"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServers:
    backup_window: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: GetServers200ApplicationJSONServersDatacenter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: GetServers200ApplicationJSONServersImage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: GetServers200ApplicationJSONServersIso = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: List[GetServers200ApplicationJSONServersPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetServers200ApplicationJSONServersProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetServers200ApplicationJSONServersPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: GetServers200ApplicationJSONServersServerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: GetServers200ApplicationJSONServersStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[GetServers200ApplicationJSONServersPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSON:
    servers: List[GetServers200ApplicationJSONServers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    meta: Optional[GetServers200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetServersRequest:
    query_params: GetServersQueryParams = field()
    

@dataclass
class GetServersResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_servers_200_application_json_object: Optional[GetServers200ApplicationJSON] = field(default=None)
    
