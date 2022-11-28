from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EventTagSiteFilterTypeEnum(str, Enum):
    WHITELIST = "WHITELIST"
    BLACKLIST = "BLACKLIST"

class EventTagStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class EventTagTypeEnum(str, Enum):
    IMPRESSION_IMAGE_EVENT_TAG = "IMPRESSION_IMAGE_EVENT_TAG"
    IMPRESSION_JAVASCRIPT_EVENT_TAG = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    CLICK_THROUGH_EVENT_TAG = "CLICK_THROUGH_EVENT_TAG"


@dataclass_json
@dataclass
class EventTag:
    r"""EventTag
    Contains properties of an event tag.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    campaign_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIdDimensionValue') }})
    enabled_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledByDefault') }})
    exclude_from_adx_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeFromAdxRequests') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_filter_type: Optional[EventTagSiteFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteFilterType') }})
    site_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteIds') }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    status: Optional[EventTagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    type: Optional[EventTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_escape_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlEscapeLevels') }})
    
