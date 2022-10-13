from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertyreference
from . import filter
from . import kindexpression
from . import propertyorder
from . import projection


@dataclass_json
@dataclass
class Query:
    distinct_on: Optional[List[propertyreference.PropertyReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distinctOn' }})
    end_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endCursor' }})
    filter: Optional[filter.Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    kind: Optional[List[kindexpression.KindExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order: Optional[List[propertyorder.PropertyOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    projection: Optional[List[projection.Projection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    start_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startCursor' }})
    
