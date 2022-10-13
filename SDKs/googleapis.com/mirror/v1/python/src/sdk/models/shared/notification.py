from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import useraction


@dataclass_json
@dataclass
class Notification:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    user_actions: Optional[List[useraction.UserAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userActions' }})
    user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userToken' }})
    verify_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyToken' }})
    
