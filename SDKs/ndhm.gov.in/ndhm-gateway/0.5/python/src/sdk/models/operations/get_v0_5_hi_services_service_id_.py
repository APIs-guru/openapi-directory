from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05HiServicesServiceIDPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV05HiServicesServiceIDHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV05HiServicesServiceIDRequest:
    path_params: GetV05HiServicesServiceIDPathParams = field(default=None)
    headers: GetV05HiServicesServiceIDHeaders = field(default=None)
    

@dataclass
class GetV05HiServicesServiceIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    service_profile_response: Optional[shared.ServiceProfileResponse] = field(default=None)
    status_code: int = field(default=None)
    
