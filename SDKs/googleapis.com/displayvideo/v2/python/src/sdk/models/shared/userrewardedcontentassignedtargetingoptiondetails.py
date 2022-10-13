from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum(str, Enum):
    USER_REWARDED_CONTENT_UNSPECIFIED = "USER_REWARDED_CONTENT_UNSPECIFIED"
    USER_REWARDED_CONTENT_USER_REWARDED = "USER_REWARDED_CONTENT_USER_REWARDED"
    USER_REWARDED_CONTENT_NOT_USER_REWARDED = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"


@dataclass_json
@dataclass
class UserRewardedContentAssignedTargetingOptionDetails:
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    user_rewarded_content: Optional[UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRewardedContent' }})
    
