from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserPermissionsResponse:
    r"""ListUserPermissionsResponse
    List user permissions response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_permission: Optional[List[UserPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPermission') }})
    
