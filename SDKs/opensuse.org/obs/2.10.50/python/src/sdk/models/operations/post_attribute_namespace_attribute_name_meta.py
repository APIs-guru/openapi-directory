from dataclasses import dataclass, field



@dataclass
class PostAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(default=None, metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAttributeNamespaceAttributeNameMetaRequest:
    path_params: PostAttributeNamespaceAttributeNameMetaPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostAttributeNamespaceAttributeNameMetaSecurity = field(default=None)
    

@dataclass
class PostAttributeNamespaceAttributeNameMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
