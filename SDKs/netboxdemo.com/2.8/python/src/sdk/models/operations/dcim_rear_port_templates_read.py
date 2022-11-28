from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesReadRequest:
    path_params: DcimRearPortTemplatesReadPathParams = field()
    

@dataclass
class DcimRearPortTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    
