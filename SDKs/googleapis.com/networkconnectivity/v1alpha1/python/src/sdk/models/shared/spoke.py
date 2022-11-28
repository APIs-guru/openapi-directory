from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SpokeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class Spoke:
    r"""Spoke
    A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[List[RouterApplianceInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[SpokeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class SpokeInput:
    r"""SpokeInput
    A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[List[RouterApplianceInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
