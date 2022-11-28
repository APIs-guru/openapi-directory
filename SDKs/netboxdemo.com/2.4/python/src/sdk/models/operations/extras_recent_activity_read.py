from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasRecentActivityReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasRecentActivityReadRequest:
    path_params: ExtrasRecentActivityReadPathParams = field()
    

@dataclass
class ExtrasRecentActivityReadResponse:
    content_type: str = field()
    status_code: int = field()
    user_action: Optional[shared.UserAction] = field(default=None)
    
