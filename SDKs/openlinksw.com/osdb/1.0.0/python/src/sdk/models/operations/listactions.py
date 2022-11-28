from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListActionsPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActionsRequest:
    path_params: ListActionsPathParams = field()
    

@dataclass
class ListActionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    list_actions_response: Optional[shared.ListActionsResponse] = field(default=None)
    
