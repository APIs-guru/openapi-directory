from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImagesPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesQueryParams:
    image_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImagesHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesRequest:
    path_params: DeleteImagesPathParams = field(default=None)
    query_params: DeleteImagesQueryParams = field(default=None)
    headers: DeleteImagesHeaders = field(default=None)
    

@dataclass
class DeleteImagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
