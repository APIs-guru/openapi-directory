from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1UserEventInlineSource:
    r"""GoogleCloudRecommendationengineV1beta1UserEventInlineSource
    The inline source for the input config for ImportUserEvents method.
    """
    
    user_events: Optional[List[GoogleCloudRecommendationengineV1beta1UserEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
