from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import floodlightactivity


@dataclass_json
@dataclass
class FloodlightActivitiesListResponse:
    floodlight_activities: Optional[List[floodlightactivity.FloodlightActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivities' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
