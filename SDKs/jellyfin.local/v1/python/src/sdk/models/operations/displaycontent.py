from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisplayContentPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisplayContentQueryParams:
    item_id: str = field(metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    item_name: str = field(metadata={'query_param': { 'field_name': 'itemName', 'style': 'form', 'explode': True }})
    item_type: str = field(metadata={'query_param': { 'field_name': 'itemType', 'style': 'form', 'explode': True }})
    

@dataclass
class DisplayContentSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisplayContentRequest:
    path_params: DisplayContentPathParams = field()
    query_params: DisplayContentQueryParams = field()
    security: DisplayContentSecurity = field()
    

@dataclass
class DisplayContentResponse:
    content_type: str = field()
    status_code: int = field()
    
