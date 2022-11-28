from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsReadRequest:
    path_params: DcimRackGroupsReadPathParams = field()
    

@dataclass
class DcimRackGroupsReadResponse:
    content_type: str = field()
    status_code: int = field()
    rack_group: Optional[shared.RackGroup] = field(default=None)
    
