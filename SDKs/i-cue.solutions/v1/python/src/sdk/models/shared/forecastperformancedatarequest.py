from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ForecastPerformanceDataRequest:
    forecast_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastValues') }})
    history_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyValues') }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesId') }})
    
