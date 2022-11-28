from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum(str, Enum):
    SENSITIVE_CATEGORY_UNSPECIFIED = "SENSITIVE_CATEGORY_UNSPECIFIED"
    SENSITIVE_CATEGORY_ADULT = "SENSITIVE_CATEGORY_ADULT"
    SENSITIVE_CATEGORY_DEROGATORY = "SENSITIVE_CATEGORY_DEROGATORY"
    SENSITIVE_CATEGORY_DOWNLOADS_SHARING = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING"
    SENSITIVE_CATEGORY_WEAPONS = "SENSITIVE_CATEGORY_WEAPONS"
    SENSITIVE_CATEGORY_GAMBLING = "SENSITIVE_CATEGORY_GAMBLING"
    SENSITIVE_CATEGORY_VIOLENCE = "SENSITIVE_CATEGORY_VIOLENCE"
    SENSITIVE_CATEGORY_SUGGESTIVE = "SENSITIVE_CATEGORY_SUGGESTIVE"
    SENSITIVE_CATEGORY_PROFANITY = "SENSITIVE_CATEGORY_PROFANITY"
    SENSITIVE_CATEGORY_ALCOHOL = "SENSITIVE_CATEGORY_ALCOHOL"
    SENSITIVE_CATEGORY_DRUGS = "SENSITIVE_CATEGORY_DRUGS"
    SENSITIVE_CATEGORY_TOBACCO = "SENSITIVE_CATEGORY_TOBACCO"
    SENSITIVE_CATEGORY_POLITICS = "SENSITIVE_CATEGORY_POLITICS"
    SENSITIVE_CATEGORY_RELIGION = "SENSITIVE_CATEGORY_RELIGION"
    SENSITIVE_CATEGORY_TRAGEDY = "SENSITIVE_CATEGORY_TRAGEDY"
    SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS"
    SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES"
    SENSITIVE_CATEGORY_SHOCKING = "SENSITIVE_CATEGORY_SHOCKING"


@dataclass_json
@dataclass
class SensitiveCategoryAssignedTargetingOptionDetailsInput:
    r"""SensitiveCategoryAssignedTargetingOptionDetailsInput
    Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
    """
    
    excluded_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedTargetingOptionId') }})
    

@dataclass_json
@dataclass
class SensitiveCategoryAssignedTargetingOptionDetails:
    r"""SensitiveCategoryAssignedTargetingOptionDetails
    Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
    """
    
    excluded_targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedTargetingOptionId') }})
    sensitive_category: Optional[SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategory') }})
    
