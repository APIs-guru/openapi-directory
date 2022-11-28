from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidationError:
    loc: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loc') }})
    msg: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
