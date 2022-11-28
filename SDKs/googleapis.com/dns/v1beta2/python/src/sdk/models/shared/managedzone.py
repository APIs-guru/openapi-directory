from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ManagedZoneVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ManagedZone:
    r"""ManagedZone
    A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
    """
    
    cloud_logging_config: Optional[ManagedZoneCloudLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudLoggingConfig') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsName') }})
    dnssec_config: Optional[ManagedZoneDNSSecConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnssecConfig') }})
    forwarding_config: Optional[ManagedZoneForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_server_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServerSet') }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    peering_config: Optional[ManagedZonePeeringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringConfig') }})
    private_visibility_config: Optional[ManagedZonePrivateVisibilityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateVisibilityConfig') }})
    reverse_lookup_config: Optional[ManagedZoneReverseLookupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseLookupConfig') }})
    service_directory_config: Optional[ManagedZoneServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryConfig') }})
    visibility: Optional[ManagedZoneVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
