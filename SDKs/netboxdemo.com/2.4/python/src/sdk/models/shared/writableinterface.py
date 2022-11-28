from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableInterfaceInput:
    circuit_termination: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit_termination') }})
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    form_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_factor') }})
    lag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lag') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mgmt_only') }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    untagged_vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
