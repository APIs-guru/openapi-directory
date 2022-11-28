from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryGrantableRolesResponse:
    r"""QueryGrantableRolesResponse
    The grantable role query response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    roles: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
