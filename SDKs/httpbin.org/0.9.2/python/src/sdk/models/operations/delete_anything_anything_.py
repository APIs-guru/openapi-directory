from dataclasses import dataclass, field
from typing import Any


@dataclass
class DeleteAnythingAnythingPathParams:
    anything: str = field(metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnythingAnythingRequest:
    path_params: DeleteAnythingAnythingPathParams = field()
    

@dataclass
class DeleteAnythingAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
