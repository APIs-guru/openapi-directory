from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rewindhyperparameterresponse
from . import rewindtimeseriesresponse


@dataclass_json
@dataclass
class RewindResponse:
    hyperparameters: Optional[rewindhyperparameterresponse.RewindHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    time_series: Optional[List[rewindtimeseriesresponse.RewindTimeSeriesResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    
