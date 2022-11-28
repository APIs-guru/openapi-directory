from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAttributeNamespaceMetaPathParams:
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceMetaRequest:
    path_params: DeleteAttributeNamespaceMetaPathParams = field()
    security: DeleteAttributeNamespaceMetaSecurity = field()
    

@dataclass
class DeleteAttributeNamespaceMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
