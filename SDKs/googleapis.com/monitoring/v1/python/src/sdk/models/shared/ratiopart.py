from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RatioPart:
    r"""RatioPart
    Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
    """
    
    aggregation: Optional[Aggregation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
