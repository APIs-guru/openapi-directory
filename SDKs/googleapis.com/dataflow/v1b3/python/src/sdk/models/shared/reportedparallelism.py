from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportedParallelism:
    is_infinite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInfinite' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
