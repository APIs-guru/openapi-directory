from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmComponentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmComponentsIDRequest:
    path_params: GetRealmComponentsIDPathParams = field()
    

@dataclass
class GetRealmComponentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    component_representation: Optional[shared.ComponentRepresentation] = field(default=None)
    
