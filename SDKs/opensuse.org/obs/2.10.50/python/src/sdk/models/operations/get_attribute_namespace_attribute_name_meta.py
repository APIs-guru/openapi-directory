from dataclasses import dataclass, field



@dataclass
class GetAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(default=None, metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeNamespaceAttributeNameMetaRequest:
    path_params: GetAttributeNamespaceAttributeNameMetaPathParams = field(default=None)
    security: GetAttributeNamespaceAttributeNameMetaSecurity = field(default=None)
    

@dataclass
class GetAttributeNamespaceAttributeNameMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
