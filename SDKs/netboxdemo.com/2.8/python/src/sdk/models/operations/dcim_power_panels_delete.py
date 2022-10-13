from dataclasses import dataclass, field



@dataclass
class DcimPowerPanelsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPanelsDeleteRequest:
    path_params: DcimPowerPanelsDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerPanelsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
