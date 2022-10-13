from dataclasses import dataclass, field



@dataclass
class GetConfigurationSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetConfigurationRequest:
    security: GetConfigurationSecurity = field(default=None)
    

@dataclass
class GetConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
