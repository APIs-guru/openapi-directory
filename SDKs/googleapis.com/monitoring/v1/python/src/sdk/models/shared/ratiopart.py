from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregation


@dataclass_json
@dataclass
class RatioPart:
    aggregation: Optional[aggregation.Aggregation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregation' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
