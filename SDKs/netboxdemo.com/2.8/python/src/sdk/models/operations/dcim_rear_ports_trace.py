from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsTracePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsTraceRequest:
    path_params: DcimRearPortsTracePathParams = field()
    

@dataclass
class DcimRearPortsTraceResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port: Optional[shared.RearPort] = field(default=None)
    
