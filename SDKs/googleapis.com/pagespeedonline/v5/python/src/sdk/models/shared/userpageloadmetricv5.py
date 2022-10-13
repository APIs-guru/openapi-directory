from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucket


@dataclass_json
@dataclass
class UserPageLoadMetricV5:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    distributions: Optional[List[bucket.Bucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributions' }})
    form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    median: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'median' }})
    metric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricId' }})
    percentile: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentile' }})
    
