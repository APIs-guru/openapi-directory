from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ViewOnlyLinksNodeListPathParams:
    link_id: str = field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewOnlyLinksNodeListRequest:
    path_params: ViewOnlyLinksNodeListPathParams = field()
    

@dataclass
class ViewOnlyLinksNodeListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
