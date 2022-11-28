from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExecuteActionPathParams:
    action_id: str = field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExecuteActionRequest:
    path_params: ExecuteActionPathParams = field()
    request: Optional[shared.ExecBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteActionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
