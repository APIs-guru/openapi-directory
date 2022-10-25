from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedvlan
from . import nestedvlan
from . import nestedvirtualmachine

class VirtualMachineInterfaceModeLabelEnum(str, Enum):
    ACCESS = "Access"
    TAGGED = "Tagged"
    TAGGED_ALL_ = "Tagged (All)"

class VirtualMachineInterfaceModeValueEnum(str, Enum):
    ACCESS = "access"
    TAGGED = "tagged"
    TAGGED_ALL = "tagged-all"


@dataclass_json
@dataclass
class VirtualMachineInterfaceMode:
    label: VirtualMachineInterfaceModeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: VirtualMachineInterfaceModeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class VirtualMachineInterfaceTypeLabelEnum(str, Enum):
    VIRTUAL = "Virtual"

class VirtualMachineInterfaceTypeValueEnum(str, Enum):
    VIRTUAL = "virtual"


@dataclass_json
@dataclass
class VirtualMachineInterfaceType:
    label: VirtualMachineInterfaceTypeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: VirtualMachineInterfaceTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class VirtualMachineInterface:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    mode: Optional[VirtualMachineInterfaceMode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tagged_vlans: Optional[List[nestedvlan.NestedVlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagged_vlans' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[VirtualMachineInterfaceType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    untagged_vlan: Optional[nestedvlan.NestedVlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'untagged_vlan' }})
    virtual_machine: nestedvirtualmachine.NestedVirtualMachine = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_machine' }})
    
