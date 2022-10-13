from dataclasses import dataclass, field



@dataclass
class DisablePathParams:
    disabled: bool = field(default=None, metadata={'path_param': { 'field_name': 'disabled', 'style': 'simple', 'explode': False }})
    source: str = field(default=None, metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableRequest:
    path_params: DisablePathParams = field(default=None)
    

@dataclass
class DisableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
