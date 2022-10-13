from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesCreateRequest:
    request: shared.WritableVirtualMachineWithConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationVirtualMachinesCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine_with_config_context: Optional[shared.VirtualMachineWithConfigContext] = field(default=None)
    
