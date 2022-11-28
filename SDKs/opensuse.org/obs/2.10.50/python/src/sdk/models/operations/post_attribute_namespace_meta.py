from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAttributeNamespaceMetaPathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAttributeNamespaceMetaRequest:
    path_params: PostAttributeNamespaceMetaPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PostAttributeNamespaceMetaSecurity = field()
    

@dataclass
class PostAttributeNamespaceMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
