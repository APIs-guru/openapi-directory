from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import creativeservingdecision
from . import htmlcontent
from . import nativecontent
from . import videocontent

class CreativeCreativeFormatEnum(str, Enum):
    CREATIVE_FORMAT_UNSPECIFIED = "CREATIVE_FORMAT_UNSPECIFIED"
    HTML = "HTML"
    VIDEO = "VIDEO"
    NATIVE = "NATIVE"

class CreativeDeclaredAttributesEnum(str, Enum):
    ATTRIBUTE_UNSPECIFIED = "ATTRIBUTE_UNSPECIFIED"
    IMAGE_RICH_MEDIA = "IMAGE_RICH_MEDIA"
    ADOBE_FLASH_FLV = "ADOBE_FLASH_FLV"
    IS_TAGGED = "IS_TAGGED"
    IS_COOKIE_TARGETED = "IS_COOKIE_TARGETED"
    IS_USER_INTEREST_TARGETED = "IS_USER_INTEREST_TARGETED"
    EXPANDING_DIRECTION_NONE = "EXPANDING_DIRECTION_NONE"
    EXPANDING_DIRECTION_UP = "EXPANDING_DIRECTION_UP"
    EXPANDING_DIRECTION_DOWN = "EXPANDING_DIRECTION_DOWN"
    EXPANDING_DIRECTION_LEFT = "EXPANDING_DIRECTION_LEFT"
    EXPANDING_DIRECTION_RIGHT = "EXPANDING_DIRECTION_RIGHT"
    EXPANDING_DIRECTION_UP_LEFT = "EXPANDING_DIRECTION_UP_LEFT"
    EXPANDING_DIRECTION_UP_RIGHT = "EXPANDING_DIRECTION_UP_RIGHT"
    EXPANDING_DIRECTION_DOWN_LEFT = "EXPANDING_DIRECTION_DOWN_LEFT"
    EXPANDING_DIRECTION_DOWN_RIGHT = "EXPANDING_DIRECTION_DOWN_RIGHT"
    CREATIVE_TYPE_HTML = "CREATIVE_TYPE_HTML"
    CREATIVE_TYPE_VAST_VIDEO = "CREATIVE_TYPE_VAST_VIDEO"
    EXPANDING_DIRECTION_UP_OR_DOWN = "EXPANDING_DIRECTION_UP_OR_DOWN"
    EXPANDING_DIRECTION_LEFT_OR_RIGHT = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    EXPANDING_DIRECTION_ANY_DIAGONAL = "EXPANDING_DIRECTION_ANY_DIAGONAL"
    EXPANDING_ACTION_ROLLOVER_TO_EXPAND = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
    INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
    RICH_MEDIA_CAPABILITY_TYPE_MRAID = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
    RICH_MEDIA_CAPABILITY_TYPE_FLASH = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
    RICH_MEDIA_CAPABILITY_TYPE_HTML5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
    SKIPPABLE_INSTREAM_VIDEO = "SKIPPABLE_INSTREAM_VIDEO"
    RICH_MEDIA_CAPABILITY_TYPE_SSL = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
    RICH_MEDIA_CAPABILITY_TYPE_NON_SSL = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
    RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
    NON_SKIPPABLE_INSTREAM_VIDEO = "NON_SKIPPABLE_INSTREAM_VIDEO"
    NATIVE_ELIGIBILITY_ELIGIBLE = "NATIVE_ELIGIBILITY_ELIGIBLE"
    NON_VPAID = "NON_VPAID"
    NATIVE_ELIGIBILITY_NOT_ELIGIBLE = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
    ANY_INTERSTITIAL = "ANY_INTERSTITIAL"
    NON_INTERSTITIAL = "NON_INTERSTITIAL"
    IN_BANNER_VIDEO = "IN_BANNER_VIDEO"
    RENDERING_SIZELESS_ADX = "RENDERING_SIZELESS_ADX"
    OMSDK_1_0 = "OMSDK_1_0"

class CreativeDeclaredRestrictedCategoriesEnum(str, Enum):
    RESTRICTED_CATEGORY_UNSPECIFIED = "RESTRICTED_CATEGORY_UNSPECIFIED"
    ALCOHOL = "ALCOHOL"

class CreativeRestrictedCategoriesEnum(str, Enum):
    RESTRICTED_CATEGORY_UNSPECIFIED = "RESTRICTED_CATEGORY_UNSPECIFIED"
    ALCOHOL = "ALCOHOL"


@dataclass_json
@dataclass
class Creative:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    ad_choices_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adChoicesDestinationUrl' }})
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserName' }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agencyId' }})
    api_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiUpdateTime' }})
    creative_format: Optional[CreativeCreativeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFormat' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    creative_serving_decision: Optional[creativeservingdecision.CreativeServingDecision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeServingDecision' }})
    deal_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealIds' }})
    declared_attributes: Optional[List[CreativeDeclaredAttributesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredAttributes' }})
    declared_click_through_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredClickThroughUrls' }})
    declared_restricted_categories: Optional[List[CreativeDeclaredRestrictedCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredRestrictedCategories' }})
    declared_vendor_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredVendorIds' }})
    html: Optional[htmlcontent.HTMLContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    impression_tracking_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionTrackingUrls' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    native: Optional[nativecontent.NativeContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'native' }})
    render_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderUrl' }})
    restricted_categories: Optional[List[CreativeRestrictedCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedCategories' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    video: Optional[videocontent.VideoContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
