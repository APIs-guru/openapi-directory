from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1ListInsightsResponse:
    r"""GoogleCloudRecommenderV1beta1ListInsightsResponse
    Response to the `ListInsights` method.
    """
    
    insights: Optional[List[GoogleCloudRecommenderV1beta1Insight]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
