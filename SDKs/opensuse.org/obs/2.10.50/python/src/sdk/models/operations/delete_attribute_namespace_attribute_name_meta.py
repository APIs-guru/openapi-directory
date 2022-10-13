from dataclasses import dataclass, field



@dataclass
class DeleteAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(default=None, metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaRequest:
    path_params: DeleteAttributeNamespaceAttributeNameMetaPathParams = field(default=None)
    security: DeleteAttributeNamespaceAttributeNameMetaSecurity = field(default=None)
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
