from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import planninglevelforecastresultdata
from . import planninglevelforecastresultdata
from . import forecastoptimalparametersresponse
from . import outlierresponse


@dataclass_json
@dataclass
class TimeSeriesFullDetailsResponse:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    forecast_data: Optional[List[planninglevelforecastresultdata.PlanningLevelForecastResultData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forecastData' }})
    history_data: Optional[List[planninglevelforecastresultdata.PlanningLevelForecastResultData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyData' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    optimal_parameters: Optional[forecastoptimalparametersresponse.ForecastOptimalParametersResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimalParameters' }})
    outliers: Optional[List[outlierresponse.OutlierResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outliers' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
