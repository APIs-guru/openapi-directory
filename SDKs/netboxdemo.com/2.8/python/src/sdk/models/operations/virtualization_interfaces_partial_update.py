from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesPartialUpdateRequest:
    path_params: VirtualizationInterfacesPartialUpdatePathParams = field()
    request: shared.WritableVirtualMachineInterfaceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationInterfacesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_machine_interface: Optional[shared.VirtualMachineInterface] = field(default=None)
    
