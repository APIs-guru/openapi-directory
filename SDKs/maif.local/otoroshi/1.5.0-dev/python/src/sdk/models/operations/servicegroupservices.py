from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceGroupServicesPathParams:
    service_group_id: str = field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceGroupServicesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceGroupServicesRequest:
    path_params: ServiceGroupServicesPathParams = field()
    security: ServiceGroupServicesSecurity = field()
    

@dataclass
class ServiceGroupServicesResponse:
    content_type: str = field()
    status_code: int = field()
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    
