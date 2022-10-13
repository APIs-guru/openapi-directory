from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPublicUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_dtos: Optional[List[shared.UserDto]] = field(default=None)
    
