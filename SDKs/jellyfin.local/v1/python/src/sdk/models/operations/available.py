from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AvailableQueryParams:
    status: Optional[shared.QuickConnectStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class AvailableSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvailableRequest:
    query_params: AvailableQueryParams = field(default=None)
    security: AvailableSecurity = field(default=None)
    

@dataclass
class AvailableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
