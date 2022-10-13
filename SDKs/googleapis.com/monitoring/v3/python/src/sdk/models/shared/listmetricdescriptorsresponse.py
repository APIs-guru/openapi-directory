from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricdescriptor


@dataclass_json
@dataclass
class ListMetricDescriptorsResponse:
    metric_descriptors: Optional[List[metricdescriptor.MetricDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricDescriptors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
