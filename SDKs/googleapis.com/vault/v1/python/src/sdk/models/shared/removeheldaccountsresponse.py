from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class RemoveHeldAccountsResponse:
    statuses: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    
