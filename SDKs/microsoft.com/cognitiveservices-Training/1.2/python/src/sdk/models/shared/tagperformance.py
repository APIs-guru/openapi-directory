from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagPerformance:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrecisionStdDeviation' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recall' }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecallStdDeviation' }})
    
