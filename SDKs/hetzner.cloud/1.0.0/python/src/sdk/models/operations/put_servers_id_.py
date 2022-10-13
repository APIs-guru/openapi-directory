from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutServersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutServersIDRequestBodyUpdateServerRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutServersIDRequest:
    path_params: PutServersIDPathParams = field(default=None)
    request: Optional[PutServersIDRequestBodyUpdateServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerDatacenterLocation:
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
class PutServersID200ApplicationJSONServerDatacenterServerTypes:
    available: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_for_migration: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_migration' }})
    supported: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerDatacenter:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: PutServersID200ApplicationJSONServerDatacenterLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_types: PutServersID200ApplicationJSONServerDatacenterServerTypes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerImageCreatedFrom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class PutServersID200ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerImageProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class PutServersID200ApplicationJSONServerImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PutServersID200ApplicationJSONServerImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerImage:
    bound_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bound_to' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_id' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_from: PutServersID200ApplicationJSONServerImageCreatedFrom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_from' }})
    deleted: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_size' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_size' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_flavor: PutServersID200ApplicationJSONServerImageOsFlavorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_flavor' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_version' }})
    protection: PutServersID200ApplicationJSONServerImageProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rapid_deploy' }})
    status: PutServersID200ApplicationJSONServerImageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: PutServersID200ApplicationJSONServerImageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PutServersID200ApplicationJSONServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerIso:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PutServersID200ApplicationJSONServerIsoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PutServersID200ApplicationJSONServerPlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPlacementGroupPlacementGroupNullable:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    type: PutServersID200ApplicationJSONServerPlacementGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias_ips' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    rebuild: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebuild' }})
    
class PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv4:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    dns_ptr: List[PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNet:
    firewalls: Optional[List[PutServersID200ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    floating_ips: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    ipv4: PutServersID200ApplicationJSONServerPublicNetIpv4 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: PutServersID200ApplicationJSONServerPublicNetIpv6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: PutServersID200ApplicationJSONServerServerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerType:
    cores: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cores' }})
    cpu_type: PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_type' }})
    deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[PutServersID200ApplicationJSONServerServerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    storage_type: PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_type' }})
    
class PutServersID200ApplicationJSONServerStatusEnum(str, Enum):
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
class PutServersID200ApplicationJSONServer:
    backup_window: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_window' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    datacenter: PutServersID200ApplicationJSONServerDatacenter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenter' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: PutServersID200ApplicationJSONServerImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    included_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_traffic' }})
    ingoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingoing_traffic' }})
    iso: PutServersID200ApplicationJSONServerIso = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outgoing_traffic: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing_traffic' }})
    placement_group: Optional[PutServersID200ApplicationJSONServerPlacementGroupPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement_group' }})
    primary_disk_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_disk_size' }})
    private_net: List[PutServersID200ApplicationJSONServerPrivateNet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_net' }})
    protection: PutServersID200ApplicationJSONServerProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    public_net: PutServersID200ApplicationJSONServerPublicNet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_net' }})
    rescue_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescue_enabled' }})
    server_type: PutServersID200ApplicationJSONServerServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_type' }})
    status: PutServersID200ApplicationJSONServerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSON:
    server: Optional[PutServersID200ApplicationJSONServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    

@dataclass
class PutServersIDResponse:
    content_type: str = field(default=None)
    put_servers_id_200_application_json_object: Optional[PutServersID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
