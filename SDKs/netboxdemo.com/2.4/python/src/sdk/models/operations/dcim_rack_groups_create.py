from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsCreateRequest:
    request: shared.WritableRackGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackGroupsCreateResponse:
    content_type: str = field(default=None)
    rack_group: Optional[shared.RackGroup] = field(default=None)
    status_code: int = field(default=None)
    
