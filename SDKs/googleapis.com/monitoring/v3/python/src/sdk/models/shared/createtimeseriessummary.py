from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTimeSeriesSummary:
    r"""CreateTimeSeriesSummary
    Summary of the result of a failed request to write data to a time series.
    """
    
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    success_point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successPointCount') }})
    total_point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPointCount') }})
    
