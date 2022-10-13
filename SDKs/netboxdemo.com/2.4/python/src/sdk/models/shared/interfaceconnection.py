from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedinterface
from . import nestedinterface


@dataclass_json
@dataclass
class InterfaceConnectionConnectionStatusConnectionStatus:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class InterfaceConnection:
    connection_status: Optional[InterfaceConnectionConnectionStatusConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface_a: nestedinterface.NestedInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_a' }})
    interface_b: nestedinterface.NestedInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_b' }})
    
