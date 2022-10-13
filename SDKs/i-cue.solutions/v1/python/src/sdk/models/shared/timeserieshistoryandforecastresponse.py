from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import planninglevelforecastresultdata
from . import planninglevelforecastresultdata


@dataclass_json
@dataclass
class TimeSeriesHistoryAndForecastResponse:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    forecast_data: Optional[List[planninglevelforecastresultdata.PlanningLevelForecastResultData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forecastData' }})
    history_data: Optional[List[planninglevelforecastresultdata.PlanningLevelForecastResultData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyData' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
