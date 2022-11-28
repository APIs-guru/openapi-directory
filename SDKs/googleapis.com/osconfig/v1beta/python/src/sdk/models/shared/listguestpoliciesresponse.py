from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGuestPoliciesResponse:
    r"""ListGuestPoliciesResponse
    A response message for listing guest policies.
    """
    
    guest_policies: Optional[List[GuestPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestPolicies') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
