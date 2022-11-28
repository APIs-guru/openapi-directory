from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDResumePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDResumeRequest:
    path_params: PostJobsIDResumePathParams = field()
    

@dataclass
class PostJobsIDResumeResponse:
    content_type: str = field()
    status_code: int = field()
    post_jobs_id_resume_200_application_json_any: Optional[Any] = field(default=None)
    
