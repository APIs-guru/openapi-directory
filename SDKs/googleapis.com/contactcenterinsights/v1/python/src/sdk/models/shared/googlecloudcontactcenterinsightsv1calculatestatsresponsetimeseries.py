from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries:
    r"""GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
    A time series representing conversations over time.
    """
    
    interval_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalDuration') }})
    points: Optional[List[GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    
