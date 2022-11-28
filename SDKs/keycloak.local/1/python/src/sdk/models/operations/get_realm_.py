from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRequest:
    path_params: GetRealmPathParams = field()
    

@dataclass
class GetRealmResponse:
    content_type: str = field()
    status_code: int = field()
    realm_representation: Optional[shared.RealmRepresentation] = field(default=None)
    
