from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetReceivedTimeCardPathParams:
    time_card_id: str = field(metadata={'path_param': { 'field_name': 'timeCard_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReceivedTimeCardRequest:
    path_params: GetReceivedTimeCardPathParams = field()
    

@dataclass
class GetReceivedTimeCardResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    time_card_received_detail_vo: Optional[Any] = field(default=None)
    
