from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphauserevent


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaUserEventInlineSource:
    user_events: Optional[List[googlecloudretailv2alphauserevent.GoogleCloudRetailV2alphaUserEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEvents' }})
    
