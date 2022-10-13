from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1userevent


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1UserEventInlineSource:
    user_events: Optional[List[googlecloudrecommendationenginev1beta1userevent.GoogleCloudRecommendationengineV1beta1UserEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEvents' }})
    
