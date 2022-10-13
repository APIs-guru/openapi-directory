from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceid
from . import resourceid

class ActivityContentDetailsRecommendationReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "reasonUnspecified"
    VIDEO_FAVORITED = "videoFavorited"
    VIDEO_LIKED = "videoLiked"
    VIDEO_WATCHED = "videoWatched"


@dataclass_json
@dataclass
class ActivityContentDetailsRecommendation:
    reason: Optional[ActivityContentDetailsRecommendationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    seed_resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedResourceId' }})
    
