from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Editors:
    domain_users_can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainUsersCanEdit' }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
