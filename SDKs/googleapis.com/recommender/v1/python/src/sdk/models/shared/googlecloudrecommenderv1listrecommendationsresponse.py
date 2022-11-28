from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1ListRecommendationsResponse:
    r"""GoogleCloudRecommenderV1ListRecommendationsResponse
    Response to the `ListRecommendations` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    recommendations: Optional[List[GoogleCloudRecommenderV1Recommendation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    
