from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDCancelPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDCancelRequest:
    path_params: PostJobsIDCancelPathParams = field()
    

@dataclass
class PostJobsIDCancelResponse:
    content_type: str = field()
    status_code: int = field()
    post_jobs_id_cancel_200_application_json_any: Optional[Any] = field(default=None)
    
