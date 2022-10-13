from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DescribeServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeServiceRequest:
    path_params: DescribeServicePathParams = field(default=None)
    

@dataclass
class DescribeServiceResponse:
    content_type: str = field(default=None)
    describe_service_response: Optional[shared.DescribeServiceResponse] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
