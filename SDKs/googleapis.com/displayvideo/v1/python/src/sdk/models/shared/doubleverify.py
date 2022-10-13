from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import doubleverifyappstarrating
from . import doubleverifybrandsafetycategories
from . import doubleverifydisplayviewability
from . import doubleverifyfraudinvalidtraffic
from . import doubleverifyvideoviewability

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
    app_star_rating: Optional[doubleverifyappstarrating.DoubleVerifyAppStarRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appStarRating' }})
    avoided_age_ratings: Optional[List[DoubleVerifyAvoidedAgeRatingsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidedAgeRatings' }})
    brand_safety_categories: Optional[doubleverifybrandsafetycategories.DoubleVerifyBrandSafetyCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandSafetyCategories' }})
    custom_segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSegmentId' }})
    display_viewability: Optional[doubleverifydisplayviewability.DoubleVerifyDisplayViewability] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayViewability' }})
    fraud_invalid_traffic: Optional[doubleverifyfraudinvalidtraffic.DoubleVerifyFraudInvalidTraffic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fraudInvalidTraffic' }})
    video_viewability: Optional[doubleverifyvideoviewability.DoubleVerifyVideoViewability] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoViewability' }})
    
