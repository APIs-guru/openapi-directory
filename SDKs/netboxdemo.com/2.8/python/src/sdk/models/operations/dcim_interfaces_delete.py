from dataclasses import dataclass, field



@dataclass
class DcimInterfacesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesDeleteRequest:
    path_params: DcimInterfacesDeletePathParams = field()
    

@dataclass
class DcimInterfacesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
