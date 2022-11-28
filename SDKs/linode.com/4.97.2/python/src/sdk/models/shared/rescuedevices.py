from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RescueDevices:
    sda: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sda') }})
    sdb: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdb') }})
    sdc: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdc') }})
    sdd: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdd') }})
    sde: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sde') }})
    sdf: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdf') }})
    sdg: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdg') }})
    
