from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreatePerfSamplesResponse:
    perf_samples: Optional[List[PerfSample]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfSamples') }})
    
