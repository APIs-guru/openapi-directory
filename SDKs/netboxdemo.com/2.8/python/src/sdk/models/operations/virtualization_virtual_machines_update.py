from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationVirtualMachinesUpdateRequest:
    path_params: VirtualizationVirtualMachinesUpdatePathParams = field()
    request: shared.WritableVirtualMachineWithConfigContextInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationVirtualMachinesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_machine_with_config_context: Optional[shared.VirtualMachineWithConfigContext] = field(default=None)
    
