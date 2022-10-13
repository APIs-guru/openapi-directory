from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import managedzonecloudloggingconfig
from . import managedzonednssecconfig
from . import managedzoneforwardingconfig
from . import managedzonepeeringconfig
from . import managedzoneprivatevisibilityconfig
from . import managedzonereverselookupconfig
from . import managedzoneservicedirectoryconfig

class ManagedZoneVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ManagedZone:
    cloud_logging_config: Optional[managedzonecloudloggingconfig.ManagedZoneCloudLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudLoggingConfig' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsName' }})
    dnssec_config: Optional[managedzonednssecconfig.ManagedZoneDNSSecConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnssecConfig' }})
    forwarding_config: Optional[managedzoneforwardingconfig.ManagedZoneForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    name_server_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameServerSet' }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameServers' }})
    peering_config: Optional[managedzonepeeringconfig.ManagedZonePeeringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringConfig' }})
    private_visibility_config: Optional[managedzoneprivatevisibilityconfig.ManagedZonePrivateVisibilityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateVisibilityConfig' }})
    reverse_lookup_config: Optional[managedzonereverselookupconfig.ManagedZoneReverseLookupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseLookupConfig' }})
    service_directory_config: Optional[managedzoneservicedirectoryconfig.ManagedZoneServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectoryConfig' }})
    visibility: Optional[ManagedZoneVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
