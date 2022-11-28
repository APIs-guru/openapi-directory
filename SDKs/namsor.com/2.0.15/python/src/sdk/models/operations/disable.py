from dataclasses import dataclass, field



@dataclass
class DisablePathParams:
    disabled: bool = field(metadata={'path_param': { 'field_name': 'disabled', 'style': 'simple', 'explode': False }})
    source: str = field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableRequest:
    path_params: DisablePathParams = field()
    

@dataclass
class DisableResponse:
    content_type: str = field()
    status_code: int = field()
    
