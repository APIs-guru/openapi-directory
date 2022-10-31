from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUntaggedImageCountPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntaggedImageCountQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUntaggedImageCountHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntaggedImageCountRequest:
    path_params: GetUntaggedImageCountPathParams = field(default=None)
    query_params: GetUntaggedImageCountQueryParams = field(default=None)
    headers: GetUntaggedImageCountHeaders = field(default=None)
    

@dataclass
class GetUntaggedImageCountResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_untagged_image_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_untagged_image_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
