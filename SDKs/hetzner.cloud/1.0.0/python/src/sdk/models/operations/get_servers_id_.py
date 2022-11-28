from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetServersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerDatacenterLocation:
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
class GetServersID200ApplicationJSONServerDatacenterServerTypes:
    r"""GetServersID200ApplicationJSONServerDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerDatacenter:
    r"""GetServersID200ApplicationJSONServerDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetServersID200ApplicationJSONServerDatacenterLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetServersID200ApplicationJSONServerDatacenterServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerImageCreatedFrom:
    r"""GetServersID200ApplicationJSONServerImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetServersID200ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerImageProtection:
    r"""GetServersID200ApplicationJSONServerImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetServersID200ApplicationJSONServerImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetServersID200ApplicationJSONServerImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerImage:
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetServersID200ApplicationJSONServerImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetServersID200ApplicationJSONServerImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetServersID200ApplicationJSONServerImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetServersID200ApplicationJSONServerImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetServersID200ApplicationJSONServerImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class GetServersID200ApplicationJSONServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerIso:
    r"""GetServersID200ApplicationJSONServerIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetServersID200ApplicationJSONServerIsoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPlacementGroupNullable:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerProtection:
    r"""GetServersID200ApplicationJSONServerProtection
    Protection configuration for the Server
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPublicNetIpv4:
    r"""GetServersID200ApplicationJSONServerPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPublicNetIpv6:
    r"""GetServersID200ApplicationJSONServerPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: List[GetServersID200ApplicationJSONServerPublicNetIpv6DNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerPublicNet:
    r"""GetServersID200ApplicationJSONServerPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: GetServersID200ApplicationJSONServerPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetServersID200ApplicationJSONServerPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[List[GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerServerTypePricesPriceHourly:
    r"""GetServersID200ApplicationJSONServerServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerServerTypePricesPriceMonthly:
    r"""GetServersID200ApplicationJSONServerServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerServerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServersID200ApplicationJSONServerServerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServersID200ApplicationJSONServerServerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class GetServersID200ApplicationJSONServerServerType:
    r"""GetServersID200ApplicationJSONServerServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetServersID200ApplicationJSONServerServerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
class GetServersID200ApplicationJSONServerStatusEnum(str, Enum):
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
class GetServersID200ApplicationJSONServer:
    backup_window: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: GetServersID200ApplicationJSONServerDatacenter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: GetServersID200ApplicationJSONServerImage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: GetServersID200ApplicationJSONServerIso = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: List[GetServersID200ApplicationJSONServerPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetServersID200ApplicationJSONServerProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetServersID200ApplicationJSONServerPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: GetServersID200ApplicationJSONServerServerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: GetServersID200ApplicationJSONServerStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[GetServersID200ApplicationJSONServerPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class GetServersID200ApplicationJSON:
    server: Optional[GetServersID200ApplicationJSONServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass
class GetServersIDRequest:
    path_params: GetServersIDPathParams = field()
    

@dataclass
class GetServersIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_servers_id_200_application_json_object: Optional[GetServersID200ApplicationJSON] = field(default=None)
    
