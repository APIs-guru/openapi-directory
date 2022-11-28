from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTunerHostQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteTunerHostSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTunerHostRequest:
    query_params: DeleteTunerHostQueryParams = field()
    security: DeleteTunerHostSecurity = field()
    

@dataclass
class DeleteTunerHostResponse:
    content_type: str = field()
    status_code: int = field()
    
