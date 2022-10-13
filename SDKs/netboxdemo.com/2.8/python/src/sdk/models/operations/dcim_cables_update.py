from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesUpdateRequest:
    path_params: DcimCablesUpdatePathParams = field(default=None)
    request: shared.WritableCable = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimCablesUpdateResponse:
    cable: Optional[shared.Cable] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
