from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagperformance


@dataclass_json
@dataclass
class IterationPerformance:
    per_tag_performance: Optional[List[tagperformance.TagPerformance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerTagPerformance' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrecisionStdDeviation' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recall' }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecallStdDeviation' }})
    
