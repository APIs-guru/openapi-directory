from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import planninglevelforecastresultdata
from . import forecasthyperparameterresponse


@dataclass_json
@dataclass
class ForecastBottomUpResponse:
    forecast_data: Optional[List[planninglevelforecastresultdata.PlanningLevelForecastResultData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forecastData' }})
    hyperparameters: Optional[forecasthyperparameterresponse.ForecastHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    
