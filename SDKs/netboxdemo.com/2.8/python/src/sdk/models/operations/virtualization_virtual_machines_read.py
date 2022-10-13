from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationVirtualMachinesReadRequest:
    path_params: VirtualizationVirtualMachinesReadPathParams = field(default=None)
    

@dataclass
class VirtualizationVirtualMachinesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_machine_with_config_context: Optional[shared.VirtualMachineWithConfigContext] = field(default=None)
    
