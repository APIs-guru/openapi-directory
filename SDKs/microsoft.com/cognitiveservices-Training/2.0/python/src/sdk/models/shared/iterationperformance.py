from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagperformance


@dataclass_json
@dataclass
class IterationPerformance:
    average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averagePrecision' }})
    per_tag_performance: Optional[List[tagperformance.TagPerformance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perTagPerformance' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precisionStdDeviation' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recallStdDeviation' }})
    
