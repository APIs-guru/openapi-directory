from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceConnectionsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceConnectionsUpdateRequest:
    path_params: DcimInterfaceConnectionsUpdatePathParams = field()
    request: shared.WritableInterfaceConnectionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceConnectionsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    interface_connection: Optional[shared.InterfaceConnection] = field(default=None)
    
