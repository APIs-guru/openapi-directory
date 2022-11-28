from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsCreateRequest:
    request: shared.WritableRackGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackGroupsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_group: Optional[shared.RackGroup] = field(default=None)
    
