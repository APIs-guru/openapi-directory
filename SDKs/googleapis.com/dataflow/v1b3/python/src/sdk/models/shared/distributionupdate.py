from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import splitint64
from . import histogram
from . import splitint64
from . import splitint64
from . import splitint64


@dataclass_json
@dataclass
class DistributionUpdate:
    count: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    histogram: Optional[histogram.Histogram] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogram' }})
    max: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    sum: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    sum_of_squares: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sumOfSquares' }})
    
