from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum(str, Enum):
    USER_REWARDED_CONTENT_UNSPECIFIED = "USER_REWARDED_CONTENT_UNSPECIFIED"
    USER_REWARDED_CONTENT_USER_REWARDED = "USER_REWARDED_CONTENT_USER_REWARDED"
    USER_REWARDED_CONTENT_NOT_USER_REWARDED = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"


@dataclass_json
@dataclass
class UserRewardedContentAssignedTargetingOptionDetailsInput:
    r"""UserRewardedContentAssignedTargetingOptionDetailsInput
    User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
    """
    
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class UserRewardedContentAssignedTargetingOptionDetails:
    r"""UserRewardedContentAssignedTargetingOptionDetails
    User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
    """
    
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    user_rewarded_content: Optional[UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContent') }})
    
