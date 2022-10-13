from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicperfsampleseries


@dataclass_json
@dataclass
class PerfSampleSeries:
    basic_perf_sample_series: Optional[basicperfsampleseries.BasicPerfSampleSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicPerfSampleSeries' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    sample_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleSeriesId' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    
