from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field(default=None)
    

@dataclass
class GetUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_users_200_application_json_any: Optional[Any] = field(default=None)
    
