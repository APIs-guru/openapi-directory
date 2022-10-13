from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContactUserInfoPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContactUserInfoRequest:
    path_params: GetContactUserInfoPathParams = field(default=None)
    

@dataclass
class GetContactUserInfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    user_details_expand_vo: Optional[Any] = field(default=None)
    
