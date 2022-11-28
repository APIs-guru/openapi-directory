from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesUpdateRequest:
    path_params: VirtualizationInterfacesUpdatePathParams = field()
    request: shared.WritableInterfaceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationInterfacesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    interface: Optional[shared.Interface] = field(default=None)
    
