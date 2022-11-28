from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserPageLoadMetricV5:
    r"""UserPageLoadMetricV5
    A CrUX metric object for a single metric and form factor.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    distributions: Optional[List[Bucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    median: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    metric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricId') }})
    percentile: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentile') }})
    
