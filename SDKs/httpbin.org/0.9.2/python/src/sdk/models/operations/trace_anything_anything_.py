from dataclasses import dataclass, field
from typing import Any


@dataclass
class TraceAnythingAnythingPathParams:
    anything: str = field(default=None, metadata={'path_param': { 'field_name': 'anything', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceAnythingAnythingRequest:
    path_params: TraceAnythingAnythingPathParams = field(default=None)
    

@dataclass
class TraceAnythingAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
