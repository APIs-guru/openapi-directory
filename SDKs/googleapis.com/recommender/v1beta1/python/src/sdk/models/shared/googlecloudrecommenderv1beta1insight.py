from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1insightrecommendationreference
from . import googlecloudrecommenderv1beta1insightstateinfo

class GoogleCloudRecommenderV1beta1InsightCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"

class GoogleCloudRecommenderV1beta1InsightSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1Insight:
    associated_recommendations: Optional[List[googlecloudrecommenderv1beta1insightrecommendationreference.GoogleCloudRecommenderV1beta1InsightRecommendationReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedRecommendations' }})
    category: Optional[GoogleCloudRecommenderV1beta1InsightCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    content: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    insight_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insightSubtype' }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    observation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observationPeriod' }})
    severity: Optional[GoogleCloudRecommenderV1beta1InsightSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    state_info: Optional[googlecloudrecommenderv1beta1insightstateinfo.GoogleCloudRecommenderV1beta1InsightStateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateInfo' }})
    target_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResources' }})
    
