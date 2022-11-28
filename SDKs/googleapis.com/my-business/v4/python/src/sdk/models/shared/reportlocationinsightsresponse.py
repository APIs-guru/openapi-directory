from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportLocationInsightsResponse:
    r"""ReportLocationInsightsResponse
    Response message for `Insights.ReportLocationInsights`.
    """
    
    location_driving_direction_metrics: Optional[List[LocationDrivingDirectionMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationDrivingDirectionMetrics') }})
    location_metrics: Optional[List[LocationMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationMetrics') }})
    
