from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesCreateRequest:
    request: shared.WritableRearPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    
