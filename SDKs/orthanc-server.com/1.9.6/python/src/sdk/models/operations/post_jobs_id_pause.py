from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDPausePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDPauseRequest:
    path_params: PostJobsIDPausePathParams = field(default=None)
    

@dataclass
class PostJobsIDPauseResponse:
    content_type: str = field(default=None)
    post_jobs_id_pause_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
