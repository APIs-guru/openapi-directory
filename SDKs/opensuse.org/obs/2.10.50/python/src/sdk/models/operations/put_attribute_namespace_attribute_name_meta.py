from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaRequest:
    path_params: PutAttributeNamespaceAttributeNameMetaPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutAttributeNamespaceAttributeNameMetaSecurity = field()
    

@dataclass
class PutAttributeNamespaceAttributeNameMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
