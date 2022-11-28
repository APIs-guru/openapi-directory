from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLicenseeSchema:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postcode: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postcode') }})
    daily: Optional[CreateLicenseeDaily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daily') }})
    whitelist: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
