from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompensationInfo:
    r"""CompensationInfo
    Job compensation details.
    """
    
    annualized_base_compensation_range: Optional[CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annualizedBaseCompensationRange') }})
    annualized_total_compensation_range: Optional[CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annualizedTotalCompensationRange') }})
    entries: Optional[List[CompensationEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
