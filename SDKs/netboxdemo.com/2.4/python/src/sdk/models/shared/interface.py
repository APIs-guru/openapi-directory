from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import interfacecircuittermination
from . import nesteddevice
from . import nestedinterface
from . import interfacevlan
from . import interfacevlan


@dataclass_json
@dataclass
class InterfaceFormFactor:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class InterfaceMode:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Interface:
    circuit_termination: Optional[interfacecircuittermination.InterfaceCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit_termination' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    form_factor: Optional[InterfaceFormFactor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_factor' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_connection' }})
    is_connected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_connected' }})
    lag: Optional[nestedinterface.NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lag' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mgmt_only' }})
    mode: Optional[InterfaceMode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tagged_vlans: Optional[List[interfacevlan.InterfaceVlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagged_vlans' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    untagged_vlan: Optional[interfacevlan.InterfaceVlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'untagged_vlan' }})
    
