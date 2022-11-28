from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PulseAnswer:
    multi_choice_answer: Optional[List[PulseMcqOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiChoiceAnswer') }})
    spatial_answer: Optional[List[PulseSpatialOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatialAnswer') }})
    text_answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnswer') }})
    
