from dataclasses import dataclass, field



@dataclass
class DeleteVolumesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesIDRequest:
    path_params: DeleteVolumesIDPathParams = field(default=None)
    

@dataclass
class DeleteVolumesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
