from dataclasses import dataclass, field



@dataclass
class PutAttributeNamespaceMetaPathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutAttributeNamespaceMetaRequest:
    path_params: PutAttributeNamespaceMetaPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutAttributeNamespaceMetaSecurity = field(default=None)
    

@dataclass
class PutAttributeNamespaceMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
