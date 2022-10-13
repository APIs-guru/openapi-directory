from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forecasthyperparameterresponse
from . import timeseriesfulldetailsresponse


@dataclass_json
@dataclass
class FullDetailsForecastResponse:
    hyperparameters: Optional[forecasthyperparameterresponse.ForecastHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    time_series: Optional[List[timeseriesfulldetailsresponse.TimeSeriesFullDetailsResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    
