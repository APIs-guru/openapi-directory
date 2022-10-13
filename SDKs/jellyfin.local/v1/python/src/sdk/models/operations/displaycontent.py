from dataclasses import dataclass, field



@dataclass
class DisplayContentPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisplayContentQueryParams:
    item_id: str = field(default=None, metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    item_name: str = field(default=None, metadata={'query_param': { 'field_name': 'itemName', 'style': 'form', 'explode': True }})
    item_type: str = field(default=None, metadata={'query_param': { 'field_name': 'itemType', 'style': 'form', 'explode': True }})
    

@dataclass
class DisplayContentSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisplayContentRequest:
    path_params: DisplayContentPathParams = field(default=None)
    query_params: DisplayContentQueryParams = field(default=None)
    security: DisplayContentSecurity = field(default=None)
    

@dataclass
class DisplayContentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
