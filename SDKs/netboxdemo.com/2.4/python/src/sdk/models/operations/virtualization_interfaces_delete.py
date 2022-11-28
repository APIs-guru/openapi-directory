from dataclasses import dataclass, field



@dataclass
class VirtualizationInterfacesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesDeleteRequest:
    path_params: VirtualizationInterfacesDeletePathParams = field()
    

@dataclass
class VirtualizationInterfacesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
