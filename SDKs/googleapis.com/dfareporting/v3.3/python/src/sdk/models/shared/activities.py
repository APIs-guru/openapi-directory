from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Activities:
    r"""Activities
    Represents an activity group.
    """
    
    filters: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    
