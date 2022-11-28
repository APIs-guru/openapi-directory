from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateKeyQueryParams:
    app: str = field(metadata={'query_param': { 'field_name': 'app', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateKeySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateKeyRequest:
    query_params: CreateKeyQueryParams = field()
    security: CreateKeySecurity = field()
    

@dataclass
class CreateKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
