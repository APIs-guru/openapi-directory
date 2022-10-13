from dataclasses import dataclass, field



@dataclass
class GetArchitecturesArchitectureNamePathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArchitecturesArchitectureNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetArchitecturesArchitectureNameRequest:
    path_params: GetArchitecturesArchitectureNamePathParams = field(default=None)
    security: GetArchitecturesArchitectureNameSecurity = field(default=None)
    

@dataclass
class GetArchitecturesArchitectureNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
