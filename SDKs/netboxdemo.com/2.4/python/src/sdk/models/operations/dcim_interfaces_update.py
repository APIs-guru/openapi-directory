from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesUpdateRequest:
    path_params: DcimInterfacesUpdatePathParams = field(default=None)
    request: shared.WritableInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesUpdateResponse:
    content_type: str = field(default=None)
    interface: Optional[shared.Interface] = field(default=None)
    status_code: int = field(default=None)
    
