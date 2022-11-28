from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetMembersPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMembersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMembersRequest:
    path_params: GetMembersPathParams = field()
    query_params: GetMembersQueryParams = field()
    

@dataclass
class GetMembersResponse:
    content_type: str = field()
    status_code: int = field()
    get_members_200_application_json_any: Optional[Any] = field(default=None)
    
