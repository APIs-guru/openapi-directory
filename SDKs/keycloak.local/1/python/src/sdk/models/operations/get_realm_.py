from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRequest:
    path_params: GetRealmPathParams = field(default=None)
    

@dataclass
class GetRealmResponse:
    content_type: str = field(default=None)
    realm_representation: Optional[shared.RealmRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
