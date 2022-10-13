from dataclasses import dataclass, field
from typing import Any


@dataclass
class PatchAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAnythingAnythingRequest:
    path_params: PatchAnythingAnythingPathParams = field(default=None)
    

@dataclass
class PatchAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
