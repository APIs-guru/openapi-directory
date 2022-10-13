from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregationresult


@dataclass_json
@dataclass
class RunAggregationQueryResponse:
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    result: Optional[aggregationresult.AggregationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
