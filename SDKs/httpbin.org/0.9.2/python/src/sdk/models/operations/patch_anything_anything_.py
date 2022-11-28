from dataclasses import dataclass, field
from typing import Any


@dataclass
class PatchAnythingAnythingPathParams:
    anything: str = field(metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAnythingAnythingRequest:
    path_params: PatchAnythingAnythingPathParams = field()
    

@dataclass
class PatchAnythingAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
