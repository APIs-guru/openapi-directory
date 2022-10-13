from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAnythingAnythingRequest:
    path_params: PostAnythingAnythingPathParams = field(default=None)
    

@dataclass
class PostAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
