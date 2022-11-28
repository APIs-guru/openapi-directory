from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTaggedImageCountPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImageCountQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetTaggedImageCountHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImageCountRequest:
    headers: GetTaggedImageCountHeaders = field()
    path_params: GetTaggedImageCountPathParams = field()
    query_params: GetTaggedImageCountQueryParams = field()
    

@dataclass
class GetTaggedImageCountResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_tagged_image_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_tagged_image_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    
