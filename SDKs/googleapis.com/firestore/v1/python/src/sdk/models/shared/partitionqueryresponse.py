from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cursor


@dataclass_json
@dataclass
class PartitionQueryResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    partitions: Optional[List[cursor.Cursor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitions' }})
    
