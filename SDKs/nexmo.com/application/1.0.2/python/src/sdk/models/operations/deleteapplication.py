from dataclasses import dataclass, field



@dataclass
class DeleteApplicationPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field(default=None)
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
