from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksPartialUpdateRequest:
    path_params: DcimRacksPartialUpdatePathParams = field(default=None)
    request: shared.WritableRack = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRacksPartialUpdateResponse:
    content_type: str = field(default=None)
    rack: Optional[shared.Rack] = field(default=None)
    status_code: int = field(default=None)
    
