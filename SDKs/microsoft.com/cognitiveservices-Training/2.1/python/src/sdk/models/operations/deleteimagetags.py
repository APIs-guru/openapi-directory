from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImageTagsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageTagsQueryParams:
    image_ids: List[str] = field(metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    tag_ids: List[str] = field(metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImageTagsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageTagsRequest:
    headers: DeleteImageTagsHeaders = field()
    path_params: DeleteImageTagsPathParams = field()
    query_params: DeleteImageTagsQueryParams = field()
    

@dataclass
class DeleteImageTagsResponse:
    content_type: str = field()
    status_code: int = field()
    
