from dataclasses import dataclass, field



@dataclass
class DcimRegionsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsDeleteRequest:
    path_params: DcimRegionsDeletePathParams = field()
    

@dataclass
class DcimRegionsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
