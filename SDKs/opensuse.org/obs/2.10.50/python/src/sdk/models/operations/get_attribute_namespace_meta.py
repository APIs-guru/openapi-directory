from dataclasses import dataclass, field



@dataclass
class GetAttributeNamespaceMetaPathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeNamespaceMetaRequest:
    path_params: GetAttributeNamespaceMetaPathParams = field(default=None)
    security: GetAttributeNamespaceMetaSecurity = field(default=None)
    

@dataclass
class GetAttributeNamespaceMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
