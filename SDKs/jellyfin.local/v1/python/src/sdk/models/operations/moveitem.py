from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class MoveItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    new_index: int = field(metadata={'path_param': { 'field_name': 'newIndex', 'style': 'simple', 'explode': False }})
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MoveItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MoveItemRequest:
    path_params: MoveItemPathParams = field()
    security: MoveItemSecurity = field()
    

@dataclass
class MoveItemResponse:
    content_type: str = field()
    status_code: int = field()
    
