from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntityOut:
    end: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
