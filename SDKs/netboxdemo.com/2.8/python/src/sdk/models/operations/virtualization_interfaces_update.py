from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesUpdateRequest:
    path_params: VirtualizationInterfacesUpdatePathParams = field(default=None)
    request: shared.WritableVirtualMachineInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationInterfacesUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine_interface: Optional[shared.VirtualMachineInterface] = field(default=None)
    
