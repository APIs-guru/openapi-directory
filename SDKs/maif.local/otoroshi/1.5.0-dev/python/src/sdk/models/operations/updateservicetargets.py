from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateServiceTargetsPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceTargetsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceTargetsRequest:
    path_params: UpdateServiceTargetsPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateServiceTargetsSecurity = field(default=None)
    

@dataclass
class UpdateServiceTargetsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    targets: Optional[List[shared.Target]] = field(default=None)
    
