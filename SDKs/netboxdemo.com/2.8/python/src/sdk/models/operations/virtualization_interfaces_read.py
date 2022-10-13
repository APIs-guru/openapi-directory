from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesReadRequest:
    path_params: VirtualizationInterfacesReadPathParams = field(default=None)
    

@dataclass
class VirtualizationInterfacesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine_interface: Optional[shared.VirtualMachineInterface] = field(default=None)
    
