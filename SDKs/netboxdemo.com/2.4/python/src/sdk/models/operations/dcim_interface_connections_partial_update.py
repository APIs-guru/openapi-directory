from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceConnectionsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceConnectionsPartialUpdateRequest:
    path_params: DcimInterfaceConnectionsPartialUpdatePathParams = field(default=None)
    request: shared.WritableInterfaceConnection = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceConnectionsPartialUpdateResponse:
    content_type: str = field(default=None)
    interface_connection: Optional[shared.InterfaceConnection] = field(default=None)
    status_code: int = field(default=None)
    
