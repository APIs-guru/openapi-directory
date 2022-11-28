from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DescribeServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeServiceRequest:
    path_params: DescribeServicePathParams = field()
    

@dataclass
class DescribeServiceResponse:
    content_type: str = field()
    status_code: int = field()
    describe_service_response: Optional[shared.DescribeServiceResponse] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
