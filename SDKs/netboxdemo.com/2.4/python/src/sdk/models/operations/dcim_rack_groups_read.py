from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsReadRequest:
    path_params: DcimRackGroupsReadPathParams = field(default=None)
    

@dataclass
class DcimRackGroupsReadResponse:
    content_type: str = field(default=None)
    rack_group: Optional[shared.RackGroup] = field(default=None)
    status_code: int = field(default=None)
    
