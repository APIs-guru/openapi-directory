from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetQuoteStateListPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuoteStateListRequest:
    path_params: GetQuoteStateListPathParams = field(default=None)
    

@dataclass
class GetQuoteStateListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    object_state_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
