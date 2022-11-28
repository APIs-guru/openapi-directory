from dataclasses import dataclass, field



@dataclass
class DcimRearPortsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsDeleteRequest:
    path_params: DcimRearPortsDeletePathParams = field()
    

@dataclass
class DcimRearPortsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
