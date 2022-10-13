from dataclasses import dataclass, field



@dataclass
class VirtualizationInterfacesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesDeleteRequest:
    path_params: VirtualizationInterfacesDeletePathParams = field(default=None)
    

@dataclass
class VirtualizationInterfacesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
