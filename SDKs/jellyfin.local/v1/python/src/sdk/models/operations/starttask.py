from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StartTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartTaskSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StartTaskRequest:
    path_params: StartTaskPathParams = field()
    security: StartTaskSecurity = field()
    

@dataclass
class StartTaskResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
