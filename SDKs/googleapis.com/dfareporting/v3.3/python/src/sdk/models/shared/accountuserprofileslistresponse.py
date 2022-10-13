from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountuserprofile


@dataclass_json
@dataclass
class AccountUserProfilesListResponse:
    account_user_profiles: Optional[List[accountuserprofile.AccountUserProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountUserProfiles' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
