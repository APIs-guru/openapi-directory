from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImageTagsPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageTagsQueryParams:
    image_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    tag_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImageTagsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class DeleteImageTagsRequest:
    path_params: DeleteImageTagsPathParams = field(default=None)
    query_params: DeleteImageTagsQueryParams = field(default=None)
    headers: DeleteImageTagsHeaders = field(default=None)
    

@dataclass
class DeleteImageTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
