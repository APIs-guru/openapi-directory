from dataclasses import dataclass, field



@dataclass
class DeleteAttributeNamespacePathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceRequest:
    path_params: DeleteAttributeNamespacePathParams = field(default=None)
    security: DeleteAttributeNamespaceSecurity = field(default=None)
    

@dataclass
class DeleteAttributeNamespaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
