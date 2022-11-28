from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomViewabilityMetric:
    r"""CustomViewabilityMetric
    Custom Viewability Metric
    """
    
    configuration: Optional[CustomViewabilityMetricConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
