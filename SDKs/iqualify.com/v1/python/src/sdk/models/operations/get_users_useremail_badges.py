from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailBadgesPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailBadgesRequest:
    path_params: GetUsersUserEmailBadgesPathParams = field()
    

@dataclass
class GetUsersUserEmailBadgesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_badges: Optional[List[shared.UserBadge]] = field(default=None)
    
