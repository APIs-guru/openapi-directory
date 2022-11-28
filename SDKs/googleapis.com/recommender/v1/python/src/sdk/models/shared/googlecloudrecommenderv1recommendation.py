from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRecommenderV1RecommendationPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    P4 = "P4"
    P3 = "P3"
    P2 = "P2"
    P1 = "P1"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1Recommendation:
    r"""GoogleCloudRecommenderV1Recommendation
    A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
    """
    
    additional_impact: Optional[List[GoogleCloudRecommenderV1Impact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalImpact') }})
    associated_insights: Optional[List[GoogleCloudRecommenderV1RecommendationInsightReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedInsights') }})
    content: Optional[GoogleCloudRecommenderV1RecommendationContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_impact: Optional[GoogleCloudRecommenderV1Impact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryImpact') }})
    priority: Optional[GoogleCloudRecommenderV1RecommendationPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    recommender_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderSubtype') }})
    state_info: Optional[GoogleCloudRecommenderV1RecommendationStateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateInfo') }})
    xor_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xorGroupId') }})
    
