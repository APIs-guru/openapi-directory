from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsReadRequest:
    path_params: DcimRegionsReadPathParams = field(default=None)
    

@dataclass
class DcimRegionsReadResponse:
    content_type: str = field(default=None)
    region: Optional[shared.Region] = field(default=None)
    status_code: int = field(default=None)
    
