from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import perfsample


@dataclass_json
@dataclass
class BatchCreatePerfSamplesResponse:
    perf_samples: Optional[List[perfsample.PerfSample]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perfSamples' }})
    
