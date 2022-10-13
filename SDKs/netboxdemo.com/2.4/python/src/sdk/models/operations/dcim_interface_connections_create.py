from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceConnectionsCreateRequest:
    request: shared.WritableInterfaceConnection = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceConnectionsCreateResponse:
    content_type: str = field(default=None)
    interface_connection: Optional[shared.InterfaceConnection] = field(default=None)
    status_code: int = field(default=None)
    
