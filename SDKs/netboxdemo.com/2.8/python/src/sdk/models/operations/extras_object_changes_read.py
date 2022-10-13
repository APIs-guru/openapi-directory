from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasObjectChangesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasObjectChangesReadRequest:
    path_params: ExtrasObjectChangesReadPathParams = field(default=None)
    

@dataclass
class ExtrasObjectChangesReadResponse:
    content_type: str = field(default=None)
    object_change: Optional[shared.ObjectChange] = field(default=None)
    status_code: int = field(default=None)
    
