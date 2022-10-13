from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetImagePerformanceCountPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagePerformanceCountQueryParams:
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetImagePerformanceCountHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetImagePerformanceCountRequest:
    path_params: GetImagePerformanceCountPathParams = field(default=None)
    query_params: GetImagePerformanceCountQueryParams = field(default=None)
    headers: GetImagePerformanceCountHeaders = field(default=None)
    

@dataclass
class GetImagePerformanceCountResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_image_performance_count_200_application_json_int32_integer: Optional[int] = field(default=None)
    get_image_performance_count_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
