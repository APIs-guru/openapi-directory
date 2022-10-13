from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_user_200_application_json_any: Optional[Any] = field(default=None)
    
