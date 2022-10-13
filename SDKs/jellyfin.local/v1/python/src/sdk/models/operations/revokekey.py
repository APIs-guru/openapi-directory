from dataclasses import dataclass, field



@dataclass
class RevokeKeyPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeKeySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RevokeKeyRequest:
    path_params: RevokeKeyPathParams = field(default=None)
    security: RevokeKeySecurity = field(default=None)
    

@dataclass
class RevokeKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
