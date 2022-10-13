from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesCreateRequest:
    request: shared.WritableVirtualMachineInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationInterfacesCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine_interface: Optional[shared.VirtualMachineInterface] = field(default=None)
    
