from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServiceByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceByIDRequest:
    path_params: GetServiceByIDPathParams = field(default=None)
    

@dataclass
class GetServiceByIDResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
