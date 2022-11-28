from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GaugeView:
    r"""GaugeView
    A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
    """
    
    lower_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerBound') }})
    upper_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperBound') }})
    
