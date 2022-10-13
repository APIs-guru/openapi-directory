from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmGroupByPathPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupByPathPathRequest:
    path_params: GetRealmGroupByPathPathPathParams = field(default=None)
    

@dataclass
class GetRealmGroupByPathPathResponse:
    content_type: str = field(default=None)
    group_representation: Optional[shared.GroupRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
