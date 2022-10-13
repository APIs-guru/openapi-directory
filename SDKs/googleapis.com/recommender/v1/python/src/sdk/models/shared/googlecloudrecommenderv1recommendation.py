from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1impact
from . import googlecloudrecommenderv1recommendationinsightreference
from . import googlecloudrecommenderv1recommendationcontent
from . import googlecloudrecommenderv1impact
from . import googlecloudrecommenderv1recommendationstateinfo

class GoogleCloudRecommenderV1RecommendationPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    P4 = "P4"
    P3 = "P3"
    P2 = "P2"
    P1 = "P1"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1Recommendation:
    additional_impact: Optional[List[googlecloudrecommenderv1impact.GoogleCloudRecommenderV1Impact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImpact' }})
    associated_insights: Optional[List[googlecloudrecommenderv1recommendationinsightreference.GoogleCloudRecommenderV1RecommendationInsightReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedInsights' }})
    content: Optional[googlecloudrecommenderv1recommendationcontent.GoogleCloudRecommenderV1RecommendationContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_impact: Optional[googlecloudrecommenderv1impact.GoogleCloudRecommenderV1Impact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryImpact' }})
    priority: Optional[GoogleCloudRecommenderV1RecommendationPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    recommender_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommenderSubtype' }})
    state_info: Optional[googlecloudrecommenderv1recommendationstateinfo.GoogleCloudRecommenderV1RecommendationStateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateInfo' }})
    xor_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xorGroupId' }})
    
