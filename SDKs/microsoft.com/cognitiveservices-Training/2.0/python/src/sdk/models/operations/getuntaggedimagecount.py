from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUntaggedImageCountPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntaggedImageCountQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUntaggedImageCountHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntaggedImageCountRequest:
    headers: GetUntaggedImageCountHeaders = field()
    path_params: GetUntaggedImageCountPathParams = field()
    query_params: GetUntaggedImageCountQueryParams = field()
    

@dataclass
class GetUntaggedImageCountResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_untagged_image_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_untagged_image_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    
