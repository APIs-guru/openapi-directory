from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetImagesByIdsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesByIdsQueryParams:
    image_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImagesByIdsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesByIdsRequest:
    headers: GetImagesByIdsHeaders = field()
    path_params: GetImagesByIdsPathParams = field()
    query_params: GetImagesByIdsQueryParams = field()
    

@dataclass
class GetImagesByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    images: Optional[List[shared.Image]] = field(default=None)
    
