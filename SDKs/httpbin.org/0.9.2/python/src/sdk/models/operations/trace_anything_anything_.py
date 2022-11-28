from dataclasses import dataclass, field
from typing import Any


@dataclass
class TraceAnythingAnythingPathParams:
    anything: str = field(metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceAnythingAnythingRequest:
    path_params: TraceAnythingAnythingPathParams = field()
    

@dataclass
class TraceAnythingAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
