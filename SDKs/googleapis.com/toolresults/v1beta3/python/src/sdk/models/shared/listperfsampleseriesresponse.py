from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import perfsampleseries


@dataclass_json
@dataclass
class ListPerfSampleSeriesResponse:
    perf_sample_series: Optional[List[perfsampleseries.PerfSampleSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perfSampleSeries' }})
    
