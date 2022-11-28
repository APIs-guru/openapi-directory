from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAttributeNamespaceAttributeNameMetaPathParams:
    attribute_name: str = field(metadata={'path_param': { 'field_name': 'attribute_name', 'style': 'simple', 'explode': False }})
    namespace: str = field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaRequest:
    path_params: DeleteAttributeNamespaceAttributeNameMetaPathParams = field()
    security: DeleteAttributeNamespaceAttributeNameMetaSecurity = field()
    

@dataclass
class DeleteAttributeNamespaceAttributeNameMetaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
