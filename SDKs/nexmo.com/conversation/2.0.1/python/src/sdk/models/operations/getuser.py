from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_200_application_json_any: Optional[Any] = field(default=None)
    
