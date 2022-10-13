from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date
from . import itemcountbystatus


@dataclass_json
@dataclass
class DataSourceIndexStats:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    item_count_by_status: Optional[List[itemcountbystatus.ItemCountByStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemCountByStatus' }})
    
