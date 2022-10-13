from dataclasses import dataclass, field



@dataclass
class GetTargetByEnsgidPathParams:
    target: str = field(default=None, metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTargetByEnsgidRequest:
    path_params: GetTargetByEnsgidPathParams = field(default=None)
    

@dataclass
class GetTargetByEnsgidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
