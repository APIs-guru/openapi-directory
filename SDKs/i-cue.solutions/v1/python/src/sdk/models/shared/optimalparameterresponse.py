from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forecasthyperparameterresponse
from . import timeseriesoptimalparametersresponse


@dataclass_json
@dataclass
class OptimalParameterResponse:
    hyperparameters: Optional[forecasthyperparameterresponse.ForecastHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    time_series: Optional[List[timeseriesoptimalparametersresponse.TimeSeriesOptimalParametersResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    
