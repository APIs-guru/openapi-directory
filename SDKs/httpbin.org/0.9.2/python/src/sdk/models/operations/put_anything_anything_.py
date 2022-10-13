from dataclasses import dataclass, field
from typing import Any


@dataclass
class PutAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAnythingAnythingRequest:
    path_params: PutAnythingAnythingPathParams = field(default=None)
    

@dataclass
class PutAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
