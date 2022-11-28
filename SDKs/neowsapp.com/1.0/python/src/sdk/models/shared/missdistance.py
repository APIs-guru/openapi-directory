from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MissDistance:
    astronomical: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('astronomical') }})
    kilometers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kilometers') }})
    lunar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lunar') }})
    miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    
