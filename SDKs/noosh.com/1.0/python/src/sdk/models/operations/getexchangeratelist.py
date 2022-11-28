from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetExchangeRateListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExchangeRateListRequest:
    path_params: GetExchangeRateListPathParams = field()
    

@dataclass
class GetExchangeRateListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    multi_exchange_rate_list_vo: Optional[Any] = field(default=None)
    
