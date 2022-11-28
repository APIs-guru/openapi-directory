from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    r"""Metric
    A `metric` is a set of user experience data for a single web performance metric, like \"first contentful paint\". It contains a summary histogram of real world Chrome usage as a series of `bins`.
    """
    
    histogram: Optional[List[Bin]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogram') }})
    percentiles: Optional[Percentiles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentiles') }})
    
