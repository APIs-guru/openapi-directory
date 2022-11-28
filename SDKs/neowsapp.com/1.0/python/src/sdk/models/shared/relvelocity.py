from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelVelocity:
    kilometers_per_hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kilometers_per_hour') }})
    miles_per_hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_per_hour') }})
    
