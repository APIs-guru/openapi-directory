from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppointmentReserveModel:
    customer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerMessage') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    phone_ext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneExt') }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneType') }})
    
