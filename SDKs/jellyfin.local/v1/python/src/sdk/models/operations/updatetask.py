from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskRequests:
    task_trigger_infos: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    task_trigger_infos1: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    task_trigger_infos2: Optional[List[shared.TaskTriggerInfo]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTaskSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field()
    request: UpdateTaskRequests = field()
    security: UpdateTaskSecurity = field()
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
