from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InterfaceTemplateFormFactor:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class InterfaceTemplate:
    device_type: NestedDeviceType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    form_factor: Optional[InterfaceTemplateFormFactor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_factor') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mgmt_only') }})
    
