from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingprofile


@dataclass_json
@dataclass
class BillingProfilesListResponse:
    billing_profiles: Optional[List[billingprofile.BillingProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingProfiles' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
