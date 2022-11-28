from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScaleQuestion:
    r"""ScaleQuestion
    A scale question. The user has a range of numeric values to choose from.
    """
    
    high: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    high_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highLabel') }})
    low: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    low_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowLabel') }})
    
