from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import forecastoptimalparametersresponse


@dataclass_json
@dataclass
class TimeSeriesOptimalParametersResponse:
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    optimal_parameters: Optional[forecastoptimalparametersresponse.ForecastOptimalParametersResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimalParameters' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
