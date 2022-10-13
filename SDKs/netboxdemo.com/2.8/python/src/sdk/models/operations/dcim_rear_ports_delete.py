from dataclasses import dataclass, field



@dataclass
class DcimRearPortsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsDeleteRequest:
    path_params: DcimRearPortsDeletePathParams = field(default=None)
    

@dataclass
class DcimRearPortsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
