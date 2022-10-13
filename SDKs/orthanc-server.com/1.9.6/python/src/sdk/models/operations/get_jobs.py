from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetJobsQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJobsRequest:
    query_params: GetJobsQueryParams = field(default=None)
    

@dataclass
class GetJobsResponse:
    content_type: str = field(default=None)
    get_jobs_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
