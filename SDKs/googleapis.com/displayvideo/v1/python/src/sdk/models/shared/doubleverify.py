from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DoubleVerifyAvoidedAgeRatingsEnum(str, Enum):
    AGE_RATING_UNSPECIFIED = "AGE_RATING_UNSPECIFIED"
    APP_AGE_RATE_UNKNOWN = "APP_AGE_RATE_UNKNOWN"
    APP_AGE_RATE_4_PLUS = "APP_AGE_RATE_4_PLUS"
    APP_AGE_RATE_9_PLUS = "APP_AGE_RATE_9_PLUS"
    APP_AGE_RATE_12_PLUS = "APP_AGE_RATE_12_PLUS"
    APP_AGE_RATE_17_PLUS = "APP_AGE_RATE_17_PLUS"
    APP_AGE_RATE_18_PLUS = "APP_AGE_RATE_18_PLUS"


@dataclass_json
@dataclass
class DoubleVerify:
    r"""DoubleVerify
    Details of DoubleVerify settings.
    """
    
    app_star_rating: Optional[DoubleVerifyAppStarRating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStarRating') }})
    avoided_age_ratings: Optional[List[DoubleVerifyAvoidedAgeRatingsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedAgeRatings') }})
    brand_safety_categories: Optional[DoubleVerifyBrandSafetyCategories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandSafetyCategories') }})
    custom_segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSegmentId') }})
    display_viewability: Optional[DoubleVerifyDisplayViewability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayViewability') }})
    fraud_invalid_traffic: Optional[DoubleVerifyFraudInvalidTraffic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fraudInvalidTraffic') }})
    video_viewability: Optional[DoubleVerifyVideoViewability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoViewability') }})
    
