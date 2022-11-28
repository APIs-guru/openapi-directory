from dataclasses import dataclass, field



@dataclass
class DeleteApplicationPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field()
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
