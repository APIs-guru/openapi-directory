from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceConnectionsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceConnectionsReadRequest:
    path_params: DcimInterfaceConnectionsReadPathParams = field(default=None)
    

@dataclass
class DcimInterfaceConnectionsReadResponse:
    content_type: str = field(default=None)
    interface_connection: Optional[shared.InterfaceConnection] = field(default=None)
    status_code: int = field(default=None)
    
