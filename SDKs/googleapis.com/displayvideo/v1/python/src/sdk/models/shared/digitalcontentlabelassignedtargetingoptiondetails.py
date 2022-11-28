from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DigitalContentLabelAssignedTargetingOptionDetails
    Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
    """
    
    content_rating_tier: Optional[DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRatingTier') }})
    excluded_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedTargetingOptionId') }})
    

@dataclass_json
@dataclass
class DigitalContentLabelAssignedTargetingOptionDetailsInput:
    r"""DigitalContentLabelAssignedTargetingOptionDetailsInput
    Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
    """
    
    excluded_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedTargetingOptionId') }})
    
