from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LogsReadPathParams:
    log_id: str = field(metadata={'path_param': { 'field_name': 'log_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsReadRequest:
    path_params: LogsReadPathParams = field()
    

@dataclass
class LogsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
