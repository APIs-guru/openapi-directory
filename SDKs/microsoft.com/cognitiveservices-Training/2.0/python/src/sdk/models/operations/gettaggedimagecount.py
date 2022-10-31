from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTaggedImageCountPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImageCountQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetTaggedImageCountHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedImageCountRequest:
    path_params: GetTaggedImageCountPathParams = field(default=None)
    query_params: GetTaggedImageCountQueryParams = field(default=None)
    headers: GetTaggedImageCountHeaders = field(default=None)
    

@dataclass
class GetTaggedImageCountResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_tagged_image_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_tagged_image_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
