from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportLocationInsightsRequest:
    r"""ReportLocationInsightsRequest
    Request message for Insights.ReportLocationInsights.
    """
    
    basic_request: Optional[BasicMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicRequest') }})
    driving_directions_request: Optional[DrivingDirectionMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivingDirectionsRequest') }})
    location_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationNames') }})
    
