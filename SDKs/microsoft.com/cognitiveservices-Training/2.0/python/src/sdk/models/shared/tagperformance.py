from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagPerformance:
    average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averagePrecision' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precisionStdDeviation' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recallStdDeviation' }})
    
