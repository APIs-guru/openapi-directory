from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipallocationpolicy


@dataclass_json
@dataclass
class NodeConfig:
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    enable_ip_masq_agent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIpMasqAgent' }})
    ip_allocation_policy: Optional[ipallocationpolicy.IPAllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAllocationPolicy' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthScopes' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
