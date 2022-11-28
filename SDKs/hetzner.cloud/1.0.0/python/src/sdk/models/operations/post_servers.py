from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostServersCreateServerRequestFirewalls:
    firewall: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerRequest:
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automount') }})
    datacenter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    firewalls: Optional[List[PostServersCreateServerRequestFirewalls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    networks: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    start_after_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_after_create') }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_data') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseActionError:
    r"""PostServersCreateServerResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersCreateServerResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersCreateServerResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersCreateServerResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersCreateServerResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersCreateServerResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerDatacenterLocation:
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
class PostServersCreateServerResponseServerDatacenterServerTypes:
    r"""PostServersCreateServerResponseServerDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerDatacenter:
    r"""PostServersCreateServerResponseServerDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: PostServersCreateServerResponseServerDatacenterLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: PostServersCreateServerResponseServerDatacenterServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerImageCreatedFrom:
    r"""PostServersCreateServerResponseServerImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PostServersCreateServerResponseServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerImageProtection:
    r"""PostServersCreateServerResponseServerImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
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
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PostServersCreateServerResponseServerImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PostServersCreateServerResponseServerImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PostServersCreateServerResponseServerImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PostServersCreateServerResponseServerImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PostServersCreateServerResponseServerImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class PostServersCreateServerResponseServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerIso:
    r"""PostServersCreateServerResponseServerIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PostServersCreateServerResponseServerIsoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPlacementGroupNullable:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerProtection:
    r"""PostServersCreateServerResponseServerProtection
    Protection configuration for the Server
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv4:
    r"""PostServersCreateServerResponseServerPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNetIpv6:
    r"""PostServersCreateServerResponseServerPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: List[PostServersCreateServerResponseServerPublicNetIpv6DNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerPublicNet:
    r"""PostServersCreateServerResponseServerPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: PostServersCreateServerResponseServerPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: PostServersCreateServerResponseServerPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[List[PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class PostServersCreateServerResponseServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePricesPriceHourly:
    r"""PostServersCreateServerResponseServerServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePricesPriceMonthly:
    r"""PostServersCreateServerResponseServerServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class PostServersCreateServerResponseServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class PostServersCreateServerResponseServerServerType:
    r"""PostServersCreateServerResponseServerServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: PostServersCreateServerResponseServerServerTypeCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[PostServersCreateServerResponseServerServerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: PostServersCreateServerResponseServerServerTypeStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
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
    backup_window: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: PostServersCreateServerResponseServerDatacenter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: PostServersCreateServerResponseServerImage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: PostServersCreateServerResponseServerIso = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: List[PostServersCreateServerResponseServerPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: PostServersCreateServerResponseServerProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: PostServersCreateServerResponseServerPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: PostServersCreateServerResponseServerServerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: PostServersCreateServerResponseServerStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[PostServersCreateServerResponseServerPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class PostServersCreateServerResponse:
    action: PostServersCreateServerResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    next_actions: List[PostServersCreateServerResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_actions') }})
    root_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_password') }})
    server: PostServersCreateServerResponseServer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass
class PostServersRequest:
    request: Optional[PostServersCreateServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServersResponse:
    content_type: str = field()
    status_code: int = field()
    create_server_response: Optional[PostServersCreateServerResponse] = field(default=None)
    
