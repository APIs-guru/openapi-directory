from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    measurements: Optional[List[Measurement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurements') }})
    metric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric-id') }})
    
