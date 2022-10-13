from dataclasses import dataclass, field
from typing import Any


@dataclass
class DeleteAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnythingAnythingRequest:
    path_params: DeleteAnythingAnythingPathParams = field(default=None)
    

@dataclass
class DeleteAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
