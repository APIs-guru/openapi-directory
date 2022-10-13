from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsReadRequest:
    path_params: DcimRearPortsReadPathParams = field(default=None)
    

@dataclass
class DcimRearPortsReadResponse:
    content_type: str = field(default=None)
    rear_port: Optional[shared.RearPort] = field(default=None)
    status_code: int = field(default=None)
    
