from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsRequest:
    headers: GetTagsHeaders = field()
    path_params: GetTagsPathParams = field()
    query_params: GetTagsQueryParams = field()
    

@dataclass
class GetTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_list: Optional[shared.TagList] = field(default=None)
    
