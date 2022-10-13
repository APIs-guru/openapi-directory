from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlanningLevelDataDto:
    history_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyValues' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
