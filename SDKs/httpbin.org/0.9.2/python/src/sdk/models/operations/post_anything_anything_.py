from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostAnythingAnythingPathParams:
    anything: str = field(metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAnythingAnythingRequest:
    path_params: PostAnythingAnythingPathParams = field()
    

@dataclass
class PostAnythingAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
