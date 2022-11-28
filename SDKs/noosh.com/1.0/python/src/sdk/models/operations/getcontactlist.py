from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContactListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContactListRequest:
    path_params: GetContactListPathParams = field()
    

@dataclass
class GetContactListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    contacts_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
