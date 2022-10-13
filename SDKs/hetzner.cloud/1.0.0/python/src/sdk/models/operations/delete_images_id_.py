from dataclasses import dataclass, field



@dataclass
class DeleteImagesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDRequest:
    path_params: DeleteImagesIDPathParams = field(default=None)
    

@dataclass
class DeleteImagesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
