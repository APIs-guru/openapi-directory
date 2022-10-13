from dataclasses import dataclass, field



@dataclass
class PostAttributeNamespaceMetaPathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAttributeNamespaceMetaRequest:
    path_params: PostAttributeNamespaceMetaPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostAttributeNamespaceMetaSecurity = field(default=None)
    

@dataclass
class PostAttributeNamespaceMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
