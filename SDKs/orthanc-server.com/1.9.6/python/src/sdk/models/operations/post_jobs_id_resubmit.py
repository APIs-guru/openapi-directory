from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDResubmitPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDResubmitRequest:
    path_params: PostJobsIDResubmitPathParams = field()
    

@dataclass
class PostJobsIDResubmitResponse:
    content_type: str = field()
    status_code: int = field()
    post_jobs_id_resubmit_200_application_json_any: Optional[Any] = field(default=None)
    
