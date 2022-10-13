from dataclasses import dataclass, field



@dataclass
class DeleteAttributeNamespaceMetaPathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceMetaRequest:
    path_params: DeleteAttributeNamespaceMetaPathParams = field(default=None)
    security: DeleteAttributeNamespaceMetaSecurity = field(default=None)
    

@dataclass
class DeleteAttributeNamespaceMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
