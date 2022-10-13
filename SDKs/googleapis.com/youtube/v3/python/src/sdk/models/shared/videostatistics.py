from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoStatistics:
    comment_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentCount' }})
    dislike_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dislikeCount' }})
    favorite_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favoriteCount' }})
    like_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likeCount' }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewCount' }})
    
