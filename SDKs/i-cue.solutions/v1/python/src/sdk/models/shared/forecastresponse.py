from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ForecastResponse:
    hyperparameters: Optional[ForecastHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameters') }})
    time_series: Optional[List[TimeSeriesForecastResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeries') }})
    
