from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1insight


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1ListInsightsResponse:
    insights: Optional[List[googlecloudrecommenderv1insight.GoogleCloudRecommenderV1Insight]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insights' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
