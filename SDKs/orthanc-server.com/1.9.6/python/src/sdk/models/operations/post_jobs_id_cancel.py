from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDCancelPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDCancelRequest:
    path_params: PostJobsIDCancelPathParams = field(default=None)
    

@dataclass
class PostJobsIDCancelResponse:
    content_type: str = field(default=None)
    post_jobs_id_cancel_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
