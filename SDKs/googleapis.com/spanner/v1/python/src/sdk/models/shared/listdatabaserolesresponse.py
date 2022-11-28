from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDatabaseRolesResponse:
    r"""ListDatabaseRolesResponse
    The response for ListDatabaseRoles.
    """
    
    database_roles: Optional[List[DatabaseRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseRoles') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
