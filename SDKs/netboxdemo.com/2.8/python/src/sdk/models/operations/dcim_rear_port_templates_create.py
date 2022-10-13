from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesCreateRequest:
    request: shared.WritableRearPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortTemplatesCreateResponse:
    content_type: str = field(default=None)
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
