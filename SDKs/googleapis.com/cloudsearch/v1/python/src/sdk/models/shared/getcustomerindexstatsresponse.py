from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customerindexstats


@dataclass_json
@dataclass
class GetCustomerIndexStatsResponse:
    average_indexed_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageIndexedItemCount' }})
    stats: Optional[List[customerindexstats.CustomerIndexStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
