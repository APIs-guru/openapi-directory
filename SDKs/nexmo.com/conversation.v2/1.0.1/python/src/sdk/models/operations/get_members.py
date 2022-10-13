from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetMembersPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMembersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMembersRequest:
    path_params: GetMembersPathParams = field(default=None)
    query_params: GetMembersQueryParams = field(default=None)
    

@dataclass
class GetMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_members_200_application_json_any: Optional[Any] = field(default=None)
    
