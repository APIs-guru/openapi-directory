from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum(str, Enum):
    CONTENT_RATING_TIER_UNSPECIFIED = "CONTENT_RATING_TIER_UNSPECIFIED"
    CONTENT_RATING_TIER_UNRATED = "CONTENT_RATING_TIER_UNRATED"
    CONTENT_RATING_TIER_GENERAL = "CONTENT_RATING_TIER_GENERAL"
    CONTENT_RATING_TIER_PARENTAL_GUIDANCE = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE"
    CONTENT_RATING_TIER_TEENS = "CONTENT_RATING_TIER_TEENS"
    CONTENT_RATING_TIER_MATURE = "CONTENT_RATING_TIER_MATURE"


@dataclass_json
@dataclass
class DigitalContentLabelAssignedTargetingOptionDetails:
    content_rating_tier: Optional[DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentRatingTier' }})
    excluded_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedTargetingOptionId' }})
    
