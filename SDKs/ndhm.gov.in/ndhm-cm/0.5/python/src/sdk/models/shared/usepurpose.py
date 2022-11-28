from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsePurpose:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    ref_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refUri') }})
    
