from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesCreateRequest:
    request: shared.WritableVirtualMachineInterfaceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationInterfacesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_machine_interface: Optional[shared.VirtualMachineInterface] = field(default=None)
    
