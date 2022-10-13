from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries:
    interval_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalDuration' }})
    points: Optional[List[googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval.GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    
