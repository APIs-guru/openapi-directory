from dataclasses import dataclass, field



@dataclass
class DcimCablesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesDeleteRequest:
    path_params: DcimCablesDeletePathParams = field()
    

@dataclass
class DcimCablesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
