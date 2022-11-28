from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPublicUsersResponse:
    content_type: str = field()
    status_code: int = field()
    user_dtos: Optional[List[shared.UserDto]] = field(default=None)
    
