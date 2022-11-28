from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServiceByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceByIDRequest:
    path_params: GetServiceByIDPathParams = field()
    

@dataclass
class GetServiceByIDResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
