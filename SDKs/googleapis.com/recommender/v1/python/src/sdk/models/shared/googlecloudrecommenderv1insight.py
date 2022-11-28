from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRecommenderV1InsightCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"

class GoogleCloudRecommenderV1InsightSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1Insight:
    r"""GoogleCloudRecommenderV1Insight
    An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
    """
    
    associated_recommendations: Optional[List[GoogleCloudRecommenderV1InsightRecommendationReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedRecommendations') }})
    category: Optional[GoogleCloudRecommenderV1InsightCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    content: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    insight_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightSubtype') }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationPeriod') }})
    severity: Optional[GoogleCloudRecommenderV1InsightSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    state_info: Optional[GoogleCloudRecommenderV1InsightStateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateInfo') }})
    target_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResources') }})
    
