from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PredictionTag:
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Probability') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagId') }})
    
