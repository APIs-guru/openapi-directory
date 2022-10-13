from dataclasses import dataclass, field



@dataclass
class PutAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(default=None, metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaRequest:
    path_params: PutAttributeNamespaceAttributeNameMetaPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutAttributeNamespaceAttributeNameMetaSecurity = field(default=None)
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
