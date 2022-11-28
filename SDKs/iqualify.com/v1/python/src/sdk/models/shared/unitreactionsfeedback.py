from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnitReactionsFeedback:
    thumbs_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbs-down') }})
    thumbs_up: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbs-up') }})
    
