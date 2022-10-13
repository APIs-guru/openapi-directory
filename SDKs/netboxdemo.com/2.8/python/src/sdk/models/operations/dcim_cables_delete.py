from dataclasses import dataclass, field



@dataclass
class DcimCablesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesDeleteRequest:
    path_params: DcimCablesDeletePathParams = field(default=None)
    

@dataclass
class DcimCablesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
