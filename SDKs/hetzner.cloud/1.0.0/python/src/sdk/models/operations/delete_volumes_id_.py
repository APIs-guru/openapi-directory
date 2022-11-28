from dataclasses import dataclass, field



@dataclass
class DeleteVolumesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesIDRequest:
    path_params: DeleteVolumesIDPathParams = field()
    

@dataclass
class DeleteVolumesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
