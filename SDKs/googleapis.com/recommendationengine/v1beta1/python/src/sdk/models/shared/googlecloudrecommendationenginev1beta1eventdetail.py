from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1EventDetail:
    r"""GoogleCloudRecommendationengineV1beta1EventDetail
    User event details shared by all recommendation types.
    """
    
    event_attributes: Optional[GoogleCloudRecommendationengineV1beta1FeatureMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAttributes') }})
    experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentIds') }})
    page_view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageViewId') }})
    recommendation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationToken') }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrerUri') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
