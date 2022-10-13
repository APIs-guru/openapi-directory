from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaseinstance
from . import apiwarning


@dataclass_json
@dataclass
class InstancesListResponse:
    items: Optional[List[databaseinstance.DatabaseInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    warnings: Optional[List[apiwarning.APIWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
