from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DistributionUpdate:
    r"""DistributionUpdate
    A metric value representing a distribution.
    """
    
    count: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    histogram: Optional[Histogram] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogram') }})
    max: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    sum: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    sum_of_squares: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sumOfSquares') }})
    
