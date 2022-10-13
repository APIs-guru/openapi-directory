from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasRecentActivityReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasRecentActivityReadRequest:
    path_params: ExtrasRecentActivityReadPathParams = field(default=None)
    

@dataclass
class ExtrasRecentActivityReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_action: Optional[shared.UserAction] = field(default=None)
    
