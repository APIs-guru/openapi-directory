from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1MeasurementMetric:
    r"""GoogleCloudMlV1MeasurementMetric
    A message representing a metric in the measurement.
    """
    
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
