from dataclasses import dataclass, field



@dataclass
class MoveItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    new_index: int = field(default=None, metadata={'path_param': { 'field_name': 'newIndex', 'style': 'simple', 'explode': False }})
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MoveItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MoveItemRequest:
    path_params: MoveItemPathParams = field(default=None)
    security: MoveItemSecurity = field(default=None)
    

@dataclass
class MoveItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
