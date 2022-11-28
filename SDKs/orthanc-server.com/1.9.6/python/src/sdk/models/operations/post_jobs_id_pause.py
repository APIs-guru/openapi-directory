from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDPausePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDPauseRequest:
    path_params: PostJobsIDPausePathParams = field()
    

@dataclass
class PostJobsIDPauseResponse:
    content_type: str = field()
    status_code: int = field()
    post_jobs_id_pause_200_application_json_any: Optional[Any] = field(default=None)
    
