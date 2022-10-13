from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import basicmetricsrequest


@dataclass_json
@dataclass
class ReportLocalPostInsightsRequest:
    basic_request: Optional[basicmetricsrequest.BasicMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicRequest' }})
    local_post_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPostNames' }})
    
