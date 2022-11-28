from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DescribeActionPathParams:
    action_id: str = field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeActionRequest:
    path_params: DescribeActionPathParams = field()
    

@dataclass
class DescribeActionResponse:
    content_type: str = field()
    status_code: int = field()
    describe_action_response: Optional[shared.DescribeActionResponse] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
