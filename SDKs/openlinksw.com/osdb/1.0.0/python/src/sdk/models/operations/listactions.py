from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListActionsPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActionsRequest:
    path_params: ListActionsPathParams = field(default=None)
    

@dataclass
class ListActionsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    list_actions_response: Optional[shared.ListActionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
