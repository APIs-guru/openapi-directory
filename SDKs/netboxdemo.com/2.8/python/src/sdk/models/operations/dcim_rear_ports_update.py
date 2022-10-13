from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsUpdateRequest:
    path_params: DcimRearPortsUpdatePathParams = field(default=None)
    request: shared.WritableRearPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortsUpdateResponse:
    content_type: str = field(default=None)
    rear_port: Optional[shared.RearPort] = field(default=None)
    status_code: int = field(default=None)
    
