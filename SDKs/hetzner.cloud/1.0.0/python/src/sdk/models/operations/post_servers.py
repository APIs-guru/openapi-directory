from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostServersCreateServerRequestFirewalls:
    firewall: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerRequest:
    automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automount' }})
    datacenter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    firewalls: Optional[List[PostServersCreateServerRequestFirewalls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
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
    request: Optional[PostServersCreateServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersCreateServerResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersCreateServerResponseAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostServersCreateServerResponseActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostServersCreateServerResponseActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostServersCreateServerResponseActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerDatacenterLocation:
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
class PostServersCreateServerResponseServerDatacenterServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerDatacenter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: PostServersCreateServerResponseServerDatacenterLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: PostServersCreateServerResponseServerDatacenterServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class PostServersCreateServerResponseServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PostServersCreateServerResponseServerImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PostServersCreateServerResponseServerImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerImage:
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: PostServersCreateServerResponseServerImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: PostServersCreateServerResponseServerImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: PostServersCreateServerResponseServerImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: PostServersCreateServerResponseServerImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: PostServersCreateServerResponseServerImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersCreateServerResponseServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerIso:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostServersCreateServerResponseServerIsoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPlacementGroupNullable:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias_ips' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    rebuild: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebuild' }})
    
class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv4:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv6:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: List[PostServersCreateServerResponseServerPublicNetIpv6DNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNet:
    firewalls: Optional[List[PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    floating_ips: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    ipv4: PostServersCreateServerResponseServerPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: PostServersCreateServerResponseServerPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class PostServersCreateServerResponseServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class PostServersCreateServerResponseServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerType:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: PostServersCreateServerResponseServerServerTypeCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[PostServersCreateServerResponseServerServerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: PostServersCreateServerResponseServerServerTypeStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    
class PostServersCreateServerResponseServerStatusEnum(str, Enum):
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
class PostServersCreateServerResponseServer:
    backup_window: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_window' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    datacenter: PostServersCreateServerResponseServerDatacenter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: PostServersCreateServerResponseServerImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    included_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    iso: PostServersCreateServerResponseServerIso = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    placement_group: Optional[PostServersCreateServerResponseServerPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    primary_disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_disk_size' }})
    private_net: List[PostServersCreateServerResponseServerPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: PostServersCreateServerResponseServerProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: PostServersCreateServerResponseServerPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    rescue_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescue_enabled' }})
    server_type: PostServersCreateServerResponseServerServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    status: PostServersCreateServerResponseServerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponse:
    action: PostServersCreateServerResponseAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    next_actions: List[PostServersCreateServerResponseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_actions' }})
    root_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_password' }})
    server: PostServersCreateServerResponseServer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    

@dataclass
class PostServersResponse:
    content_type: str = field(default=None)
    create_server_response: Optional[PostServersCreateServerResponse] = field(default=None)
    status_code: int = field(default=None)
    
