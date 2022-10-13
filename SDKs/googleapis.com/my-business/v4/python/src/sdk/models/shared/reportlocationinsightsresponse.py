from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationdrivingdirectionmetrics
from . import locationmetrics


@dataclass_json
@dataclass
class ReportLocationInsightsResponse:
    location_driving_direction_metrics: Optional[List[locationdrivingdirectionmetrics.LocationDrivingDirectionMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationDrivingDirectionMetrics' }})
    location_metrics: Optional[List[locationmetrics.LocationMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationMetrics' }})
    
