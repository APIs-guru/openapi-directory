from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FloodlightActivitiesListResponse:
    r"""FloodlightActivitiesListResponse
    Floodlight Activity List Response
    """
    
    floodlight_activities: Optional[List[FloodlightActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivities') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
