from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryGrantableRolesRequestViewEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class QueryGrantableRolesRequest:
    r"""QueryGrantableRolesRequest
    The grantable role query request.
    """
    
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    view: Optional[QueryGrantableRolesRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
