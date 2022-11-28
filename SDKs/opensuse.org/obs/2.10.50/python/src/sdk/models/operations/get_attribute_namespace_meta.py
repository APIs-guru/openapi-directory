from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAttributeNamespaceMetaPathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeNamespaceMetaRequest:
    path_params: GetAttributeNamespaceMetaPathParams = field()
    security: GetAttributeNamespaceMetaSecurity = field()
    

@dataclass
class GetAttributeNamespaceMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
