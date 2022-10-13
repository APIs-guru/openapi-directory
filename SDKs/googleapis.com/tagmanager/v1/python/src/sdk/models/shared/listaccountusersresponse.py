from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import useraccess


@dataclass_json
@dataclass
class ListAccountUsersResponse:
    user_access: Optional[List[useraccess.UserAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAccess' }})
    
