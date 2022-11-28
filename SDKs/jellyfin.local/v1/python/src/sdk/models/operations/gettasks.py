from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTasksQueryParams:
    is_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isEnabled', 'style': 'form', 'explode': True }})
    is_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isHidden', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTasksSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTasksRequest:
    query_params: GetTasksQueryParams = field()
    security: GetTasksSecurity = field()
    

@dataclass
class GetTasksResponse:
    content_type: str = field()
    status_code: int = field()
    task_infos: Optional[List[shared.TaskInfo]] = field(default=None)
    
