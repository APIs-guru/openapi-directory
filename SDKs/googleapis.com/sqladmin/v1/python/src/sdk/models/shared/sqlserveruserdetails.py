from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SQLServerUserDetails:
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    server_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverRoles' }})
    
