from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum(str, Enum):
    USER_REWARDED_CONTENT_UNSPECIFIED = "USER_REWARDED_CONTENT_UNSPECIFIED"
    USER_REWARDED_CONTENT_USER_REWARDED = "USER_REWARDED_CONTENT_USER_REWARDED"
    USER_REWARDED_CONTENT_NOT_USER_REWARDED = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"


@dataclass_json
@dataclass
class UserRewardedContentTargetingOptionDetails:
    r"""UserRewardedContentTargetingOptionDetails
    Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
    """
    
    user_rewarded_content: Optional[UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContent') }})
    
