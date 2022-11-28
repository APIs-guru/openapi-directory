from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationVirtualMachinesPartialUpdateRequest:
    path_params: VirtualizationVirtualMachinesPartialUpdatePathParams = field()
    request: shared.WritableVirtualMachineInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationVirtualMachinesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_machine: Optional[shared.VirtualMachine] = field(default=None)
    
