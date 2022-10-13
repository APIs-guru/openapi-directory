from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesUpdateRequest:
    path_params: DcimRearPortTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableRearPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortTemplatesUpdateResponse:
    content_type: str = field(default=None)
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
