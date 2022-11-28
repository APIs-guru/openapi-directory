from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmEventsConfigPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmEventsConfigRequest:
    path_params: GetRealmEventsConfigPathParams = field()
    

@dataclass
class GetRealmEventsConfigResponse:
    content_type: str = field()
    status_code: int = field()
    realm_events_config_representation: Optional[shared.RealmEventsConfigRepresentation] = field(default=None)
    
