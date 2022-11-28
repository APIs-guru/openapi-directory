from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionHelpPathParams:
    action_id: str = field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionHelpRequest:
    path_params: ActionHelpPathParams = field()
    

@dataclass
class ActionHelpResponse:
    content_type: str = field()
    status_code: int = field()
    action_help_response: Optional[shared.ActionHelpResponse] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
