from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreatePerfSamplesRequest:
    r"""BatchCreatePerfSamplesRequest
    The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
    """
    
    perf_samples: Optional[List[PerfSample]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfSamples') }})
    
