from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1recommendation


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1ListRecommendationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    recommendations: Optional[List[googlecloudrecommenderv1beta1recommendation.GoogleCloudRecommenderV1beta1Recommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    
