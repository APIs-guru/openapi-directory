from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ViewOnlyLinksReadPathParams:
    link_id: str = field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewOnlyLinksReadRequest:
    path_params: ViewOnlyLinksReadPathParams = field()
    

@dataclass
class ViewOnlyLinksReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
