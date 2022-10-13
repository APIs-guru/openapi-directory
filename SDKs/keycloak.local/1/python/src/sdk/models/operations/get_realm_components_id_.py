from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmComponentsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmComponentsIDRequest:
    path_params: GetRealmComponentsIDPathParams = field(default=None)
    

@dataclass
class GetRealmComponentsIDResponse:
    component_representation: Optional[shared.ComponentRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
