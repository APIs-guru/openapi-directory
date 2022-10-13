from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1impact
from . import googlecloudrecommenderv1beta1recommendationinsightreference
from . import googlecloudrecommenderv1beta1recommendationcontent
from . import googlecloudrecommenderv1beta1impact
from . import googlecloudrecommenderv1beta1recommendationstateinfo

class GoogleCloudRecommenderV1beta1RecommendationPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    P4 = "P4"
    P3 = "P3"
    P2 = "P2"
    P1 = "P1"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1Recommendation:
    additional_impact: Optional[List[googlecloudrecommenderv1beta1impact.GoogleCloudRecommenderV1beta1Impact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImpact' }})
    associated_insights: Optional[List[googlecloudrecommenderv1beta1recommendationinsightreference.GoogleCloudRecommenderV1beta1RecommendationInsightReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedInsights' }})
    content: Optional[googlecloudrecommenderv1beta1recommendationcontent.GoogleCloudRecommenderV1beta1RecommendationContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_impact: Optional[googlecloudrecommenderv1beta1impact.GoogleCloudRecommenderV1beta1Impact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryImpact' }})
    priority: Optional[GoogleCloudRecommenderV1beta1RecommendationPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    recommender_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommenderSubtype' }})
    state_info: Optional[googlecloudrecommenderv1beta1recommendationstateinfo.GoogleCloudRecommenderV1beta1RecommendationStateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateInfo' }})
    xor_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xorGroupId' }})
    
