from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImagesPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesQueryParams:
    image_ids: List[str] = field(metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImagesHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesRequest:
    headers: DeleteImagesHeaders = field()
    path_params: DeleteImagesPathParams = field()
    query_params: DeleteImagesQueryParams = field()
    

@dataclass
class DeleteImagesResponse:
    content_type: str = field()
    status_code: int = field()
    
