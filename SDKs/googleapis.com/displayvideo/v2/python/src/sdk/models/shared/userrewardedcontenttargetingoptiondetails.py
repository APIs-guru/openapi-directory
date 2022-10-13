from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum(str, Enum):
    USER_REWARDED_CONTENT_UNSPECIFIED = "USER_REWARDED_CONTENT_UNSPECIFIED"
    USER_REWARDED_CONTENT_USER_REWARDED = "USER_REWARDED_CONTENT_USER_REWARDED"
    USER_REWARDED_CONTENT_NOT_USER_REWARDED = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"


@dataclass_json
@dataclass
class UserRewardedContentTargetingOptionDetails:
    user_rewarded_content: Optional[UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRewardedContent' }})
    
