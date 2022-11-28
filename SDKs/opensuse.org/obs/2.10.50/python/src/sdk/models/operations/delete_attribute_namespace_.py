from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAttributeNamespacePathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceRequest:
    path_params: DeleteAttributeNamespacePathParams = field()
    security: DeleteAttributeNamespaceSecurity = field()
    

@dataclass
class DeleteAttributeNamespaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
