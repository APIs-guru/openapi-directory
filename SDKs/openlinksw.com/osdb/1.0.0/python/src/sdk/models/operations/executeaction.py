from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExecuteActionPathParams:
    action_id: str = field(default=None, metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExecuteActionRequest:
    path_params: ExecuteActionPathParams = field(default=None)
    request: Optional[shared.ExecBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteActionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
