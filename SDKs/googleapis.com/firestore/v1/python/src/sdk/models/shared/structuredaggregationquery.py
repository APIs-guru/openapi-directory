from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregation
from . import structuredquery


@dataclass_json
@dataclass
class StructuredAggregationQuery:
    aggregations: Optional[List[aggregation.Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregations' }})
    structured_query: Optional[structuredquery.StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredQuery' }})
    
