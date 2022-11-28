from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmGroupByPathPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupByPathPathRequest:
    path_params: GetRealmGroupByPathPathPathParams = field()
    

@dataclass
class GetRealmGroupByPathPathResponse:
    content_type: str = field()
    status_code: int = field()
    group_representation: Optional[shared.GroupRepresentation] = field(default=None)
    
