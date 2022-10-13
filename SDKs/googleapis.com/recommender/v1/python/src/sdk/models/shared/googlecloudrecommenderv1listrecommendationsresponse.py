from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1recommendation


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1ListRecommendationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    recommendations: Optional[List[googlecloudrecommenderv1recommendation.GoogleCloudRecommenderV1Recommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    
