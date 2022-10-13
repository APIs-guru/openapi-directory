from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guestpolicy


@dataclass_json
@dataclass
class ListGuestPoliciesResponse:
    guest_policies: Optional[List[guestpolicy.GuestPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
