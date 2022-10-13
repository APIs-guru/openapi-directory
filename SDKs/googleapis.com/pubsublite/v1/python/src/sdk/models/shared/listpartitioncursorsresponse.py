from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitioncursor


@dataclass_json
@dataclass
class ListPartitionCursorsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    partition_cursors: Optional[List[partitioncursor.PartitionCursor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionCursors' }})
    
