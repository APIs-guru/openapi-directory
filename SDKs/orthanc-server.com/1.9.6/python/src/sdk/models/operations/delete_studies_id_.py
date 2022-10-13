from dataclasses import dataclass, field



@dataclass
class DeleteStudiesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDRequest:
    path_params: DeleteStudiesIDPathParams = field(default=None)
    

@dataclass
class DeleteStudiesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
