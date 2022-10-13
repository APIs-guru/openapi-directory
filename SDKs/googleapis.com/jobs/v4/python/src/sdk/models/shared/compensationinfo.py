from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compensationrange
from . import compensationrange
from . import compensationentry


@dataclass_json
@dataclass
class CompensationInfo:
    annualized_base_compensation_range: Optional[compensationrange.CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annualizedBaseCompensationRange' }})
    annualized_total_compensation_range: Optional[compensationrange.CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annualizedTotalCompensationRange' }})
    entries: Optional[List[compensationentry.CompensationEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
