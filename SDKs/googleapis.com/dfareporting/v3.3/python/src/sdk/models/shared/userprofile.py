from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserProfile:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    sub_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountId' }})
    sub_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountName' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
