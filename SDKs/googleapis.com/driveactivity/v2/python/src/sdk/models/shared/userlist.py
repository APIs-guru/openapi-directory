from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import singleuser


@dataclass_json
@dataclass
class UserList:
    values: Optional[List[singleuser.SingleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
