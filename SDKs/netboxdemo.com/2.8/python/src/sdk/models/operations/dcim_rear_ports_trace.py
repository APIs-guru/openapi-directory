from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsTracePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsTraceRequest:
    path_params: DcimRearPortsTracePathParams = field(default=None)
    

@dataclass
class DcimRearPortsTraceResponse:
    content_type: str = field(default=None)
    rear_port: Optional[shared.RearPort] = field(default=None)
    status_code: int = field(default=None)
    
