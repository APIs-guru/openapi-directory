from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NewUserRequestInput:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    entity_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityToken') }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    
