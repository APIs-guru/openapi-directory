from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasObjectChangesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasObjectChangesReadRequest:
    path_params: ExtrasObjectChangesReadPathParams = field()
    

@dataclass
class ExtrasObjectChangesReadResponse:
    content_type: str = field()
    status_code: int = field()
    object_change: Optional[shared.ObjectChange] = field(default=None)
    
