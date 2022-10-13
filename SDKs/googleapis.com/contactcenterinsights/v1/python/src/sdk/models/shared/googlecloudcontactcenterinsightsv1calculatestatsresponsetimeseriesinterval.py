from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval:
    conversation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationCount' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
