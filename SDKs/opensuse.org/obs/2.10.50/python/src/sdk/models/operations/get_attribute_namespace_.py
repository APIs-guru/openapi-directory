from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAttributeNamespacePathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttributeNamespaceSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeNamespaceRequest:
    path_params: GetAttributeNamespacePathParams = field()
    security: GetAttributeNamespaceSecurity = field()
    

@dataclass
class GetAttributeNamespaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
