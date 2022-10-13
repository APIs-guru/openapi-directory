from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceGroupServicesPathParams:
    service_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceGroupServicesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceGroupServicesRequest:
    path_params: ServiceGroupServicesPathParams = field(default=None)
    security: ServiceGroupServicesSecurity = field(default=None)
    

@dataclass
class ServiceGroupServicesResponse:
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
