from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQuoteStateListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuoteStateListRequest:
    path_params: GetQuoteStateListPathParams = field()
    

@dataclass
class GetQuoteStateListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    object_state_list_vo: Optional[Any] = field(default=None)
    
