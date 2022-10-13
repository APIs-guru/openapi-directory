from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betauserevent


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEventInlineSource:
    user_events: Optional[List[googlecloudretailv2betauserevent.GoogleCloudRetailV2betaUserEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEvents' }})
    
