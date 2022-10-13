from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableInterface:
    circuit_termination: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit_termination' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    form_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_factor' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_connection' }})
    is_connected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_connected' }})
    lag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lag' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mgmt_only' }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tagged_vlans: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagged_vlans' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    untagged_vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'untagged_vlan' }})
    
