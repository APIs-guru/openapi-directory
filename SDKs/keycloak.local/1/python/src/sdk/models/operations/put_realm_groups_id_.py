from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmGroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmGroupsIDRequest:
    path_params: PutRealmGroupsIDPathParams = field()
    request: shared.GroupRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
