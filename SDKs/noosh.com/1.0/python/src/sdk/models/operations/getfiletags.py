from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetFileTagsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileTagsRequest:
    path_params: GetFileTagsPathParams = field()
    

@dataclass
class GetFileTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file_tag_response_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
