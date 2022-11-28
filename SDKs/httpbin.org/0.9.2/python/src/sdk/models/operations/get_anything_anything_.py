from dataclasses import dataclass, field
from typing import Any


@dataclass
class GetAnythingAnythingPathParams:
    anything: str = field(metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnythingAnythingRequest:
    path_params: GetAnythingAnythingPathParams = field()
    

@dataclass
class GetAnythingAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
