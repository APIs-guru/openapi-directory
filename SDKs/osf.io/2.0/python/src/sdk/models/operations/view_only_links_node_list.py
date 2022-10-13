from dataclasses import dataclass, field
from typing import List


@dataclass
class ViewOnlyLinksNodeListPathParams:
    link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewOnlyLinksNodeListRequest:
    path_params: ViewOnlyLinksNodeListPathParams = field(default=None)
    

@dataclass
class ViewOnlyLinksNodeListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
