from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetMyTimeCardListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyTimeCardListRequest:
    path_params: GetMyTimeCardListPathParams = field()
    

@dataclass
class GetMyTimeCardListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    time_card_list_vo: Optional[Any] = field(default=None)
    
