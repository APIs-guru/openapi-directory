from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostJobsIDResumePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJobsIDResumeRequest:
    path_params: PostJobsIDResumePathParams = field(default=None)
    

@dataclass
class PostJobsIDResumeResponse:
    content_type: str = field(default=None)
    post_jobs_id_resume_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
