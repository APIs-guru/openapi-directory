from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskRequests:
    task_trigger_infos: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    task_trigger_infos1: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    task_trigger_infos2: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTaskSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field(default=None)
    request: UpdateTaskRequests = field(default=None)
    security: UpdateTaskSecurity = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
