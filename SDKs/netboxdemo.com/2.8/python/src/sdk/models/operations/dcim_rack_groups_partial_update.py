from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsPartialUpdateRequest:
    path_params: DcimRackGroupsPartialUpdatePathParams = field(default=None)
    request: shared.WritableRackGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackGroupsPartialUpdateResponse:
    content_type: str = field(default=None)
    rack_group: Optional[shared.RackGroup] = field(default=None)
    status_code: int = field(default=None)
    
