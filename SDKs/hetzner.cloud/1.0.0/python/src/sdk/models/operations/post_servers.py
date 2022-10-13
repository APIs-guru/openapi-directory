from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostServersRequestBodyFirewalls:
    firewall: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass_json
@dataclass
class PostServersRequestBodyCreateServerRequest:
    automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automount' }})
    datacenter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    firewalls: Optional[List[PostServersRequestBodyFirewalls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    server_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    start_after_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_after_create' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_data' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass
class PostServersRequest:
    request: Optional[PostServersRequestBodyCreateServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServers201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONActionAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServers201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServers201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServers201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONNextActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONNextActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServers201ApplicationJSONNextActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONNextActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServers201ApplicationJSONNextActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServers201ApplicationJSONNextActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServers201ApplicationJSONNextActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerDatacenterLocation:
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
class PostServers201ApplicationJSONServerDatacenterServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerDatacenter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: PostServers201ApplicationJSONServerDatacenterLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: PostServers201ApplicationJSONServerDatacenterServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class PostServers201ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PostServers201ApplicationJSONServerImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PostServers201ApplicationJSONServerImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerImage:
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: PostServers201ApplicationJSONServerImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: PostServers201ApplicationJSONServerImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: PostServers201ApplicationJSONServerImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: PostServers201ApplicationJSONServerImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: PostServers201ApplicationJSONServerImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServers201ApplicationJSONServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerIso:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostServers201ApplicationJSONServerIsoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServers201ApplicationJSONServerPlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPlacementGroupPlacementGroupNullable:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PostServers201ApplicationJSONServerPlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias_ips' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    rebuild: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebuild' }})
    
class PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPublicNetIpv4:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPublicNetIpv6:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: List[PostServers201ApplicationJSONServerPublicNetIpv6DNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerPublicNet:
    firewalls: Optional[List[PostServers201ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    floating_ips: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    ipv4: PostServers201ApplicationJSONServerPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: PostServers201ApplicationJSONServerPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class PostServers201ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerServerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerServerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerServerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: PostServers201ApplicationJSONServerServerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: PostServers201ApplicationJSONServerServerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class PostServers201ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class PostServers201ApplicationJSONServerServerType:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: PostServers201ApplicationJSONServerServerTypeCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[PostServers201ApplicationJSONServerServerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: PostServers201ApplicationJSONServerServerTypeStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    
class PostServers201ApplicationJSONServerStatusEnum(str, Enum):
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
class PostServers201ApplicationJSONServer:
    backup_window: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_window' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    datacenter: PostServers201ApplicationJSONServerDatacenter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: PostServers201ApplicationJSONServerImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    included_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    iso: PostServers201ApplicationJSONServerIso = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    placement_group: Optional[PostServers201ApplicationJSONServerPlacementGroupPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    primary_disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_disk_size' }})
    private_net: List[PostServers201ApplicationJSONServerPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: PostServers201ApplicationJSONServerProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: PostServers201ApplicationJSONServerPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    rescue_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescue_enabled' }})
    server_type: PostServers201ApplicationJSONServerServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    status: PostServers201ApplicationJSONServerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class PostServers201ApplicationJSONCreateServerResponse:
    action: PostServers201ApplicationJSONActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    next_actions: List[PostServers201ApplicationJSONNextActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_actions' }})
    root_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_password' }})
    server: PostServers201ApplicationJSONServer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    

@dataclass
class PostServersResponse:
    content_type: str = field(default=None)
    create_server_response: Optional[PostServers201ApplicationJSONCreateServerResponse] = field(default=None)
    status_code: int = field(default=None)
    
