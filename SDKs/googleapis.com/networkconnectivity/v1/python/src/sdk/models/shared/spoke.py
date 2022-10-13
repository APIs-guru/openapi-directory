from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import linkedinterconnectattachments
from . import linkedrouterapplianceinstances
from . import linkedvpntunnels

class SpokeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class Spoke:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hub' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linked_interconnect_attachments: Optional[linkedinterconnectattachments.LinkedInterconnectAttachments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedInterconnectAttachments' }})
    linked_router_appliance_instances: Optional[linkedrouterapplianceinstances.LinkedRouterApplianceInstances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedRouterApplianceInstances' }})
    linked_vpn_tunnels: Optional[linkedvpntunnels.LinkedVpnTunnels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedVpnTunnels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[SpokeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
