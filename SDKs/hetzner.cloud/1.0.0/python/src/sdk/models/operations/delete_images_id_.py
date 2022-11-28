from dataclasses import dataclass, field



@dataclass
class DeleteImagesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDRequest:
    path_params: DeleteImagesIDPathParams = field()
    

@dataclass
class DeleteImagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
