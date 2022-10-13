from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteddevice
from . import nestedvirtualmachine


@dataclass_json
@dataclass
class IPAddressInterface:
    device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    virtual_machine: Optional[nestedvirtualmachine.NestedVirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_machine' }})
    
