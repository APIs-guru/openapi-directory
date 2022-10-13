from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import businesscallsinsights


@dataclass_json
@dataclass
class ListBusinessCallsInsightsResponse:
    business_calls_insights: Optional[List[businesscallsinsights.BusinessCallsInsights]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessCallsInsights' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
