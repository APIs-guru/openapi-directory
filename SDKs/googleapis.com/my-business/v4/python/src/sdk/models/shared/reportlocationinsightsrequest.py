from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import basicmetricsrequest
from . import drivingdirectionmetricsrequest


@dataclass_json
@dataclass
class ReportLocationInsightsRequest:
    basic_request: Optional[basicmetricsrequest.BasicMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicRequest' }})
    driving_directions_request: Optional[drivingdirectionmetricsrequest.DrivingDirectionMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drivingDirectionsRequest' }})
    location_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationNames' }})
    
