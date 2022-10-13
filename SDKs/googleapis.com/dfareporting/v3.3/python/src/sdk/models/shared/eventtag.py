from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue

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
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    campaign_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIdDimensionValue' }})
    enabled_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledByDefault' }})
    exclude_from_adx_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeFromAdxRequests' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site_filter_type: Optional[EventTagSiteFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteFilterType' }})
    site_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteIds' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    status: Optional[EventTagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    type: Optional[EventTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_escape_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlEscapeLevels' }})
    
