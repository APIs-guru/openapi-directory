from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmComponentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmComponentsIDRequest:
    path_params: PutRealmComponentsIDPathParams = field()
    request: shared.ComponentRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmComponentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
