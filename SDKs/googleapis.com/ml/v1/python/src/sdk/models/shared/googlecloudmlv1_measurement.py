from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1Measurement:
    r"""GoogleCloudMlV1Measurement
    A message representing a measurement.
    """
    
    elapsed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedTime') }})
    metrics: Optional[List[GoogleCloudMlV1MeasurementMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    step_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepCount') }})
    
