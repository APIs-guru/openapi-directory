from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBusinessCallsInsightsResponse:
    r"""ListBusinessCallsInsightsResponse
    Response message for ListBusinessCallsInsights.
    """
    
    business_calls_insights: Optional[List[BusinessCallsInsights]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessCallsInsights') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
