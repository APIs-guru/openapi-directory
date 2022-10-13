from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourceindexstats


@dataclass_json
@dataclass
class GetDataSourceIndexStatsResponse:
    average_indexed_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageIndexedItemCount' }})
    stats: Optional[List[datasourceindexstats.DataSourceIndexStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
