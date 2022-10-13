from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StopTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTaskSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StopTaskRequest:
    path_params: StopTaskPathParams = field(default=None)
    security: StopTaskSecurity = field(default=None)
    

@dataclass
class StopTaskResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
