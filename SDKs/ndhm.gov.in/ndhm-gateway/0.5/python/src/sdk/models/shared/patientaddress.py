from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatientAddress:
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    pincode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pincode') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
