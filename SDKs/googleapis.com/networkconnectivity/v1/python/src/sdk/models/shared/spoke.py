from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
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
    A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[LinkedInterconnectAttachments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[LinkedRouterApplianceInstances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[LinkedVpnTunnels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[SpokeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class SpokeInput:
    r"""SpokeInput
    A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[LinkedInterconnectAttachmentsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[LinkedRouterApplianceInstancesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[LinkedVpnTunnelsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
