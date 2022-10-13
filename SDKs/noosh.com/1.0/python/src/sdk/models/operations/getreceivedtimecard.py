from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetReceivedTimeCardPathParams:
    time_card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timeCard_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReceivedTimeCardRequest:
    path_params: GetReceivedTimeCardPathParams = field(default=None)
    

@dataclass
class GetReceivedTimeCardResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    time_card_received_detail_vo: Optional[Any] = field(default=None)
    
