from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAttributeNamespaceMetaPathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutAttributeNamespaceMetaRequest:
    path_params: PutAttributeNamespaceMetaPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutAttributeNamespaceMetaSecurity = field()
    

@dataclass
class PutAttributeNamespaceMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
