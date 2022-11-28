from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InterfaceFormFactor:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class InterfaceMode:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Interface:
    device: NestedDevice = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    circuit_termination: Optional[InterfaceCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit_termination') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    form_factor: Optional[InterfaceFormFactor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_factor') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_connection') }})
    is_connected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_connected') }})
    lag: Optional[NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lag') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mgmt_only') }})
    mode: Optional[InterfaceMode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[List[InterfaceVlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    untagged_vlan: Optional[InterfaceVlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
