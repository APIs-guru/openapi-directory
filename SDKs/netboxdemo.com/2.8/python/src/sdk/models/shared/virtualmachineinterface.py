from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    label: VirtualMachineInterfaceModeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: VirtualMachineInterfaceModeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class VirtualMachineInterfaceTypeLabelEnum(str, Enum):
    VIRTUAL = "Virtual"

class VirtualMachineInterfaceTypeValueEnum(str, Enum):
    VIRTUAL = "virtual"


@dataclass_json
@dataclass
class VirtualMachineInterfaceType:
    label: VirtualMachineInterfaceTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: VirtualMachineInterfaceTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class VirtualMachineInterface:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    virtual_machine: NestedVirtualMachine = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mode: Optional[VirtualMachineInterfaceMode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[List[NestedVlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[VirtualMachineInterfaceType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    untagged_vlan: Optional[NestedVlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
