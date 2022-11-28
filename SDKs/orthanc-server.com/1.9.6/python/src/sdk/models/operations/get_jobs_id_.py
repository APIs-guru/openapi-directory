from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetJobsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobsIDRequest:
    path_params: GetJobsIDPathParams = field()
    

@dataclass
class GetJobsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_jobs_id_200_application_json_any: Optional[Any] = field(default=None)
    
