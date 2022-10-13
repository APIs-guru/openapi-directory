from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesReadRequest:
    path_params: DcimRearPortTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimRearPortTemplatesReadResponse:
    content_type: str = field(default=None)
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
