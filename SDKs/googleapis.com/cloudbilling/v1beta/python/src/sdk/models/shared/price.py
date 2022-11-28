from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Price:
    r"""Price
    The price of a SKU at a point int time.
    """
    
    effective_time: Optional[EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    price_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    rate: Optional[Rate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    
