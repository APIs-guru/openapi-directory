from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2userevent


@dataclass_json
@dataclass
class GoogleCloudRetailV2UserEventInlineSource:
    user_events: Optional[List[googlecloudretailv2userevent.GoogleCloudRetailV2UserEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEvents' }})
    
