from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmEventsConfigPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmEventsConfigRequest:
    path_params: PutRealmEventsConfigPathParams = field(default=None)
    request: shared.RealmEventsConfigRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmEventsConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
