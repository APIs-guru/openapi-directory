from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestampResMember:
    invited: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invited') }})
    joined: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('joined') }})
    left: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    
