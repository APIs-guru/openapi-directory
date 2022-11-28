from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceConnectionsCreateRequest:
    request: shared.WritableInterfaceConnectionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceConnectionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    interface_connection: Optional[shared.InterfaceConnection] = field(default=None)
    
