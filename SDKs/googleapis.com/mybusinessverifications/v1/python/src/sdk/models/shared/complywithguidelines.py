from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ComplyWithGuidelinesRecommendationReasonEnum(str, Enum):
    RECOMMENDATION_REASON_UNSPECIFIED = "RECOMMENDATION_REASON_UNSPECIFIED"
    BUSINESS_LOCATION_SUSPENDED = "BUSINESS_LOCATION_SUSPENDED"
    BUSINESS_LOCATION_DISABLED = "BUSINESS_LOCATION_DISABLED"


@dataclass_json
@dataclass
class ComplyWithGuidelines:
    recommendation_reason: Optional[ComplyWithGuidelinesRecommendationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationReason' }})
    
