from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportTicketRequest:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_id' }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    longviewclient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longviewclient_id' }})
    managed_issue: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managed_issue' }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancer_id' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    summary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    vlan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    volume_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_id' }})
    
