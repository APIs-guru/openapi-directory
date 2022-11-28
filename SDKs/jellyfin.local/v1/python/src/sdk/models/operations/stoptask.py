from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StopTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTaskSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StopTaskRequest:
    path_params: StopTaskPathParams = field()
    security: StopTaskSecurity = field()
    

@dataclass
class StopTaskResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
