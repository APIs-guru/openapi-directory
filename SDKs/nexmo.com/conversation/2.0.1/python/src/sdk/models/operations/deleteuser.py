from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field()
    

@dataclass
class DeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    delete_user_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
