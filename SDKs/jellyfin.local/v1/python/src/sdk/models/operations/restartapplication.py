from dataclasses import dataclass, field



@dataclass
class RestartApplicationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RestartApplicationRequest:
    security: RestartApplicationSecurity = field(default=None)
    

@dataclass
class RestartApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
