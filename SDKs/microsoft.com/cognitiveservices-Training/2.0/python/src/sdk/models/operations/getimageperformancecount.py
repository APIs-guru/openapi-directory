from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetImagePerformanceCountPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagePerformanceCountQueryParams:
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetImagePerformanceCountHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagePerformanceCountRequest:
    headers: GetImagePerformanceCountHeaders = field()
    path_params: GetImagePerformanceCountPathParams = field()
    query_params: GetImagePerformanceCountQueryParams = field()
    

@dataclass
class GetImagePerformanceCountResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_image_performance_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_image_performance_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    
