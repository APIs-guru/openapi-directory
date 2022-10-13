from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import objectfilter
from . import objectfilter
from . import objectfilter
from . import objectfilter

class AccountUserProfileTraffickerTypeEnum(str, Enum):
    INTERNAL_NON_TRAFFICKER = "INTERNAL_NON_TRAFFICKER"
    INTERNAL_TRAFFICKER = "INTERNAL_TRAFFICKER"
    EXTERNAL_TRAFFICKER = "EXTERNAL_TRAFFICKER"

class AccountUserProfileUserAccessTypeEnum(str, Enum):
    NORMAL_USER = "NORMAL_USER"
    SUPER_USER = "SUPER_USER"
    INTERNAL_ADMINISTRATOR = "INTERNAL_ADMINISTRATOR"
    READ_ONLY_SUPER_USER = "READ_ONLY_SUPER_USER"


@dataclass_json
@dataclass
class AccountUserProfile:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    advertiser_filter: Optional[objectfilter.ObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserFilter' }})
    campaign_filter: Optional[objectfilter.ObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignFilter' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site_filter: Optional[objectfilter.ObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteFilter' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    trafficker_type: Optional[AccountUserProfileTraffickerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffickerType' }})
    user_access_type: Optional[AccountUserProfileUserAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAccessType' }})
    user_role_filter: Optional[objectfilter.ObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoleFilter' }})
    user_role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoleId' }})
    
