from dataclasses import dataclass, field



@dataclass
class CreateKeyQueryParams:
    app: str = field(default=None, metadata={'query_param': { 'field_name': 'app', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateKeySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateKeyRequest:
    query_params: CreateKeyQueryParams = field(default=None)
    security: CreateKeySecurity = field(default=None)
    

@dataclass
class CreateKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
