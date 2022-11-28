from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DoubleVerifyAppStarRating
    Details of DoubleVerify star ratings settings.
    """
    
    avoid_insufficient_star_rating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidInsufficientStarRating') }})
    avoided_star_rating: Optional[DoubleVerifyAppStarRatingAvoidedStarRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedStarRating') }})
    
