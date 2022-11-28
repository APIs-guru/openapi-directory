from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05HiServicesServiceIDPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV05HiServicesServiceIDHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV05HiServicesServiceIDRequest:
    headers: GetV05HiServicesServiceIDHeaders = field()
    path_params: GetV05HiServicesServiceIDPathParams = field()
    

@dataclass
class GetV05HiServicesServiceIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    service_profile_response: Optional[shared.ServiceProfileResponse] = field(default=None)
    
