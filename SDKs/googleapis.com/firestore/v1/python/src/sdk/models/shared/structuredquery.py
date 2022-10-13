from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cursor
from . import collectionselector
from . import order
from . import projection
from . import cursor
from . import filter


@dataclass_json
@dataclass
class StructuredQuery:
    end_at: Optional[cursor.Cursor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAt' }})
    from_: Optional[List[collectionselector.CollectionSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[List[order.Order]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    select: Optional[projection.Projection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    start_at: Optional[cursor.Cursor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAt' }})
    where: Optional[filter.Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    
