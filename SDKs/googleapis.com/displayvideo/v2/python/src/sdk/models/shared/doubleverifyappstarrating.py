from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DoubleVerifyAppStarRatingAvoidedStarRatingEnum(str, Enum):
    APP_STAR_RATE_UNSPECIFIED = "APP_STAR_RATE_UNSPECIFIED"
    APP_STAR_RATE_1_POINT_5_LESS = "APP_STAR_RATE_1_POINT_5_LESS"
    APP_STAR_RATE_2_LESS = "APP_STAR_RATE_2_LESS"
    APP_STAR_RATE_2_POINT_5_LESS = "APP_STAR_RATE_2_POINT_5_LESS"
    APP_STAR_RATE_3_LESS = "APP_STAR_RATE_3_LESS"
    APP_STAR_RATE_3_POINT_5_LESS = "APP_STAR_RATE_3_POINT_5_LESS"
    APP_STAR_RATE_4_LESS = "APP_STAR_RATE_4_LESS"
    APP_STAR_RATE_4_POINT_5_LESS = "APP_STAR_RATE_4_POINT_5_LESS"


@dataclass_json
@dataclass
class DoubleVerifyAppStarRating:
    avoid_insufficient_star_rating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidInsufficientStarRating' }})
    avoided_star_rating: Optional[DoubleVerifyAppStarRatingAvoidedStarRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidedStarRating' }})
    
