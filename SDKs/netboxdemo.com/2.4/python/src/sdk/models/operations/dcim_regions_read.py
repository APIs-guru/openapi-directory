from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsReadRequest:
    path_params: DcimRegionsReadPathParams = field()
    

@dataclass
class DcimRegionsReadResponse:
    content_type: str = field()
    status_code: int = field()
    region: Optional[shared.Region] = field(default=None)
    
