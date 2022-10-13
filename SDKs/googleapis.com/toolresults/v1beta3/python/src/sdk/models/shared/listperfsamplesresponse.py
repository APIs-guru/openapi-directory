from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import perfsample


@dataclass_json
@dataclass
class ListPerfSamplesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    perf_samples: Optional[List[perfsample.PerfSample]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perfSamples' }})
    
