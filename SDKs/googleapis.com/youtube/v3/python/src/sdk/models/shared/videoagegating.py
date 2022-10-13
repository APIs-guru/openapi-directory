from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VideoAgeGatingVideoGameRatingEnum(str, Enum):
    ANYONE = "anyone"
    M15_PLUS = "m15Plus"
    M16_PLUS = "m16Plus"
    M17_PLUS = "m17Plus"


@dataclass_json
@dataclass
class VideoAgeGating:
    alcohol_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alcoholContent' }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restricted' }})
    video_game_rating: Optional[VideoAgeGatingVideoGameRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoGameRating' }})
    
