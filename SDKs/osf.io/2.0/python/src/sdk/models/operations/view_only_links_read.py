from dataclasses import dataclass, field



@dataclass
class ViewOnlyLinksReadPathParams:
    link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewOnlyLinksReadRequest:
    path_params: ViewOnlyLinksReadPathParams = field(default=None)
    

@dataclass
class ViewOnlyLinksReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
