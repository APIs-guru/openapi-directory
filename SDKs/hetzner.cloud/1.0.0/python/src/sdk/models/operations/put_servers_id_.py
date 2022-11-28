from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutServersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutServersIDUpdateServerRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerDatacenterLocation:
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
class PutServersID200ApplicationJSONServerDatacenterServerTypes:
    r"""PutServersID200ApplicationJSONServerDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerDatacenter:
    r"""PutServersID200ApplicationJSONServerDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: PutServersID200ApplicationJSONServerDatacenterLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: PutServersID200ApplicationJSONServerDatacenterServerTypes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerImageCreatedFrom:
    r"""PutServersID200ApplicationJSONServerImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutServersID200ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerImageProtection:
    r"""PutServersID200ApplicationJSONServerImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
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
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PutServersID200ApplicationJSONServerImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PutServersID200ApplicationJSONServerImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PutServersID200ApplicationJSONServerImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PutServersID200ApplicationJSONServerImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PutServersID200ApplicationJSONServerImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class PutServersID200ApplicationJSONServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerIso:
    r"""PutServersID200ApplicationJSONServerIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PutServersID200ApplicationJSONServerIsoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPlacementGroupNullable:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPrivateNet:
    alias_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerProtection:
    r"""PutServersID200ApplicationJSONServerProtection
    Protection configuration for the Server
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv4:
    r"""PutServersID200ApplicationJSONServerPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6:
    r"""PutServersID200ApplicationJSONServerPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: List[PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerPublicNet:
    r"""PutServersID200ApplicationJSONServerPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: PutServersID200ApplicationJSONServerPublicNetIpv4 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: PutServersID200ApplicationJSONServerPublicNetIpv6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[List[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceHourly:
    r"""PutServersID200ApplicationJSONServerServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly:
    r"""PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: PutServersID200ApplicationJSONServerServerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclass
class PutServersID200ApplicationJSONServerServerType:
    r"""PutServersID200ApplicationJSONServerServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[PutServersID200ApplicationJSONServerServerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
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
    backup_window: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: PutServersID200ApplicationJSONServerDatacenter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: PutServersID200ApplicationJSONServerImage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: PutServersID200ApplicationJSONServerIso = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: List[PutServersID200ApplicationJSONServerPrivateNet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: PutServersID200ApplicationJSONServerProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: PutServersID200ApplicationJSONServerPublicNet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: PutServersID200ApplicationJSONServerServerType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: PutServersID200ApplicationJSONServerStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[PutServersID200ApplicationJSONServerPlacementGroupNullable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class PutServersID200ApplicationJSON:
    server: Optional[PutServersID200ApplicationJSONServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass
class PutServersIDRequest:
    path_params: PutServersIDPathParams = field()
    request: Optional[PutServersIDUpdateServerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutServersIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_servers_id_200_application_json_object: Optional[PutServersID200ApplicationJSON] = field(default=None)
    
