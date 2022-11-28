from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DiscvoverTunersQueryParams:
    new_devices_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'newDevicesOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscvoverTunersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DiscvoverTunersRequest:
    query_params: DiscvoverTunersQueryParams = field()
    security: DiscvoverTunersSecurity = field()
    

@dataclass
class DiscvoverTunersResponse:
    content_type: str = field()
    status_code: int = field()
    tuner_host_infos: Optional[List[shared.TunerHostInfo]] = field(default=None)
    
