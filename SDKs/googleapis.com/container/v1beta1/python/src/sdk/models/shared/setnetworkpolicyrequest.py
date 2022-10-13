from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkpolicy


@dataclass_json
@dataclass
class SetNetworkPolicyRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_policy: Optional[networkpolicy.NetworkPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkPolicy' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
