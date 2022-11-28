from dataclasses import dataclass, field



@dataclass
class GetTargetByEnsgidPathParams:
    target: str = field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTargetByEnsgidRequest:
    path_params: GetTargetByEnsgidPathParams = field()
    

@dataclass
class GetTargetByEnsgidResponse:
    content_type: str = field()
    status_code: int = field()
    
