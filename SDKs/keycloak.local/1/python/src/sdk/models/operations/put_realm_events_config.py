from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmEventsConfigPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmEventsConfigRequest:
    path_params: PutRealmEventsConfigPathParams = field()
    request: shared.RealmEventsConfigRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmEventsConfigResponse:
    content_type: str = field()
    status_code: int = field()
    
