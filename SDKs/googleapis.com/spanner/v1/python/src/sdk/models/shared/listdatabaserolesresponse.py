from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaserole


@dataclass_json
@dataclass
class ListDatabaseRolesResponse:
    database_roles: Optional[List[databaserole.DatabaseRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseRoles' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
