from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Availablenumber:
    cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    msisdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msisdn') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
