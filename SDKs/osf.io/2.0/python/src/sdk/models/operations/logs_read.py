from dataclasses import dataclass, field



@dataclass
class LogsReadPathParams:
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'log_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsReadRequest:
    path_params: LogsReadPathParams = field(default=None)
    

@dataclass
class LogsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
