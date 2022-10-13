from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_200_application_json_any: Optional[Any] = field(default=None)
    
