from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetServersRequest:
    query_params: GetServersQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONMeta:
    pagination: GetServers200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersDatacenterLocation:
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
class GetServers200ApplicationJSONServersDatacenterServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersDatacenter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: GetServers200ApplicationJSONServersDatacenterLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: GetServers200ApplicationJSONServersDatacenterServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class GetServers200ApplicationJSONServersImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
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
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: GetServers200ApplicationJSONServersImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: GetServers200ApplicationJSONServersImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: GetServers200ApplicationJSONServersImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: GetServers200ApplicationJSONServersImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: GetServers200ApplicationJSONServersImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetServers200ApplicationJSONServersIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersIso:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: GetServers200ApplicationJSONServersIsoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetServers200ApplicationJSONServersPlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPlacementGroupPlacementGroupNullable:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: GetServers200ApplicationJSONServersPlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias_ips' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    rebuild: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebuild' }})
    
class GetServers200ApplicationJSONServersPublicNetFirewallsStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetFirewallsServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[GetServers200ApplicationJSONServersPublicNetFirewallsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv4:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: List[GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersPublicNet:
    firewalls: Optional[List[GetServers200ApplicationJSONServersPublicNetFirewallsServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    floating_ips: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    ipv4: GetServers200ApplicationJSONServersPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: GetServers200ApplicationJSONServersPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class GetServers200ApplicationJSONServersServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetServers200ApplicationJSONServersServerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetServers200ApplicationJSONServersServerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class GetServers200ApplicationJSONServersServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServers200ApplicationJSONServersServerType:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: GetServers200ApplicationJSONServersServerTypeCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetServers200ApplicationJSONServersServerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: GetServers200ApplicationJSONServersServerTypeStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    
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
    backup_window: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_window' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    datacenter: GetServers200ApplicationJSONServersDatacenter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: GetServers200ApplicationJSONServersImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    included_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    iso: GetServers200ApplicationJSONServersIso = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    placement_group: Optional[GetServers200ApplicationJSONServersPlacementGroupPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    primary_disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_disk_size' }})
    private_net: List[GetServers200ApplicationJSONServersPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: GetServers200ApplicationJSONServersProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: GetServers200ApplicationJSONServersPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    rescue_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescue_enabled' }})
    server_type: GetServers200ApplicationJSONServersServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    status: GetServers200ApplicationJSONServersStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class GetServers200ApplicationJSON:
    meta: Optional[GetServers200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    servers: List[GetServers200ApplicationJSONServers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    

@dataclass
class GetServersResponse:
    content_type: str = field(default=None)
    get_servers_200_application_json_object: Optional[GetServers200ApplicationJSON] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
