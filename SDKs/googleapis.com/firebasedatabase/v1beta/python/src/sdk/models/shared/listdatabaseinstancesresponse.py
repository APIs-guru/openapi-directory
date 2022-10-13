from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaseinstance


@dataclass_json
@dataclass
class ListDatabaseInstancesResponse:
    instances: Optional[List[databaseinstance.DatabaseInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
