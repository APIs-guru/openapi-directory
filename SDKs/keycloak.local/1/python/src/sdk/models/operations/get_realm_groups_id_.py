from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmGroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsIDRequest:
    path_params: GetRealmGroupsIDPathParams = field()
    

@dataclass
class GetRealmGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    group_representation: Optional[shared.GroupRepresentation] = field(default=None)
    
