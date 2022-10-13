from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localpostmetrics


@dataclass_json
@dataclass
class ReportLocalPostInsightsResponse:
    local_post_metrics: Optional[List[localpostmetrics.LocalPostMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPostMetrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
