from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeServingDecisionDetectedAttributesEnum(str, Enum):
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


@dataclass_json
@dataclass
class CreativeServingDecision:
    r"""CreativeServingDecision
    Top level status and detected attributes of a creative.
    """
    
    ad_technology_providers: Optional[AdTechnologyProviders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTechnologyProviders') }})
    china_policy_compliance: Optional[PolicyCompliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chinaPolicyCompliance') }})
    deals_policy_compliance: Optional[PolicyCompliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealsPolicyCompliance') }})
    detected_advertisers: Optional[List[AdvertiserAndBrand]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedAdvertisers') }})
    detected_attributes: Optional[List[CreativeServingDecisionDetectedAttributesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedAttributes') }})
    detected_click_through_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedClickThroughUrls') }})
    detected_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedDomains') }})
    detected_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    detected_product_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProductCategories') }})
    detected_sensitive_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedSensitiveCategories') }})
    detected_vendor_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedVendorIds') }})
    last_status_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusUpdate') }})
    network_policy_compliance: Optional[PolicyCompliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkPolicyCompliance') }})
    platform_policy_compliance: Optional[PolicyCompliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformPolicyCompliance') }})
    russia_policy_compliance: Optional[PolicyCompliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('russiaPolicyCompliance') }})
    
