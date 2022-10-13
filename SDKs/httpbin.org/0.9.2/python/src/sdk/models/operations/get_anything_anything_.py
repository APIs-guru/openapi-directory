from dataclasses import dataclass, field
from typing import Any


@dataclass
class GetAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnythingAnythingRequest:
    path_params: GetAnythingAnythingPathParams = field(default=None)
    

@dataclass
class GetAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
