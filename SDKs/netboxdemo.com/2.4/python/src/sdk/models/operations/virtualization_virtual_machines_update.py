from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationVirtualMachinesUpdateRequest:
    path_params: VirtualizationVirtualMachinesUpdatePathParams = field(default=None)
    request: shared.WritableVirtualMachine = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationVirtualMachinesUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine: Optional[shared.VirtualMachine] = field(default=None)
    
