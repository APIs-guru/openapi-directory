from dataclasses import dataclass, field



@dataclass
class VirtualizationVirtualMachinesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationVirtualMachinesDeleteRequest:
    path_params: VirtualizationVirtualMachinesDeletePathParams = field(default=None)
    

@dataclass
class VirtualizationVirtualMachinesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
