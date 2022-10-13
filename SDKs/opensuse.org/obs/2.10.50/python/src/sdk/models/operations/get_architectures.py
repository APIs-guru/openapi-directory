from dataclasses import dataclass, field



@dataclass
class GetArchitecturesSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetArchitecturesRequest:
    security: GetArchitecturesSecurity = field(default=None)
    

@dataclass
class GetArchitecturesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
