from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import estimationtimepoint
from . import rate


@dataclass_json
@dataclass
class Price:
    effective_time: Optional[estimationtimepoint.EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTime' }})
    price_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceType' }})
    rate: Optional[rate.Rate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    
