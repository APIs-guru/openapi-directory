from dataclasses import dataclass, field



@dataclass
class DcimPowerPanelsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPanelsDeleteRequest:
    path_params: DcimPowerPanelsDeletePathParams = field()
    

@dataclass
class DcimPowerPanelsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
