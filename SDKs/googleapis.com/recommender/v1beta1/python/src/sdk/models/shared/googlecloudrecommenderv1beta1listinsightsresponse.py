from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1insight


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1ListInsightsResponse:
    insights: Optional[List[googlecloudrecommenderv1beta1insight.GoogleCloudRecommenderV1beta1Insight]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insights' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
