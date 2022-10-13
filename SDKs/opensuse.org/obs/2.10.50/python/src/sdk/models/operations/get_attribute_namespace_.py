from dataclasses import dataclass, field



@dataclass
class GetAttributeNamespacePathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttributeNamespaceSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeNamespaceRequest:
    path_params: GetAttributeNamespacePathParams = field(default=None)
    security: GetAttributeNamespaceSecurity = field(default=None)
    

@dataclass
class GetAttributeNamespaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
