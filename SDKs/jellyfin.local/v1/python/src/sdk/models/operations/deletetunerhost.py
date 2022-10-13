from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTunerHostQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteTunerHostSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTunerHostRequest:
    query_params: DeleteTunerHostQueryParams = field(default=None)
    security: DeleteTunerHostSecurity = field(default=None)
    

@dataclass
class DeleteTunerHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
