from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
    Response message for ListUserEvents method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_events: Optional[List[GoogleCloudRecommendationengineV1beta1UserEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
