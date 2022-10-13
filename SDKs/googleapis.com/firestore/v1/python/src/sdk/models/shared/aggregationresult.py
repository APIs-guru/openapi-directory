from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class AggregationResult:
    aggregate_fields: Optional[dict[str, value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateFields' }})
    
