from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum(str, Enum):
    CONTENT_RATING_TIER_UNSPECIFIED = "CONTENT_RATING_TIER_UNSPECIFIED"
    CONTENT_RATING_TIER_UNRATED = "CONTENT_RATING_TIER_UNRATED"
    CONTENT_RATING_TIER_GENERAL = "CONTENT_RATING_TIER_GENERAL"
    CONTENT_RATING_TIER_PARENTAL_GUIDANCE = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE"
    CONTENT_RATING_TIER_TEENS = "CONTENT_RATING_TIER_TEENS"
    CONTENT_RATING_TIER_MATURE = "CONTENT_RATING_TIER_MATURE"
    CONTENT_RATING_TIER_FAMILIES = "CONTENT_RATING_TIER_FAMILIES"


@dataclass_json
@dataclass
class DigitalContentLabelAssignedTargetingOptionDetails:
    excluded_content_rating_tier: Optional[DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedContentRatingTier' }})
    
