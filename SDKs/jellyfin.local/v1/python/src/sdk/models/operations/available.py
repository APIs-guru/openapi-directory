from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AvailableQueryParams:
    status: Optional[shared.QuickConnectStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class AvailableSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvailableRequest:
    query_params: AvailableQueryParams = field()
    security: AvailableSecurity = field()
    

@dataclass
class AvailableResponse:
    content_type: str = field()
    status_code: int = field()
    
