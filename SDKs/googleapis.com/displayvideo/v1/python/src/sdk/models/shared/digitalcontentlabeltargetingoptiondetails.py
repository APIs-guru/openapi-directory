from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum(str, Enum):
    CONTENT_RATING_TIER_UNSPECIFIED = "CONTENT_RATING_TIER_UNSPECIFIED"
    CONTENT_RATING_TIER_UNRATED = "CONTENT_RATING_TIER_UNRATED"
    CONTENT_RATING_TIER_GENERAL = "CONTENT_RATING_TIER_GENERAL"
    CONTENT_RATING_TIER_PARENTAL_GUIDANCE = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE"
    CONTENT_RATING_TIER_TEENS = "CONTENT_RATING_TIER_TEENS"
    CONTENT_RATING_TIER_MATURE = "CONTENT_RATING_TIER_MATURE"


@dataclass_json
@dataclass
class DigitalContentLabelTargetingOptionDetails:
    r"""DigitalContentLabelTargetingOptionDetails
    Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
    """
    
    content_rating_tier: Optional[DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRatingTier') }})
    
