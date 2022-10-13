from dataclasses import dataclass, field



@dataclass
class DcimInterfacesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesDeleteRequest:
    path_params: DcimInterfacesDeletePathParams = field(default=None)
    

@dataclass
class DcimInterfacesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
