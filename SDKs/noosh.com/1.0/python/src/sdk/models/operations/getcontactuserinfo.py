from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContactUserInfoPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContactUserInfoRequest:
    path_params: GetContactUserInfoPathParams = field()
    

@dataclass
class GetContactUserInfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    user_details_expand_vo: Optional[Any] = field(default=None)
    
