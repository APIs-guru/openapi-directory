from dataclasses import dataclass, field



@dataclass
class DcimPowerOutletsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsDeleteRequest:
    path_params: DcimPowerOutletsDeletePathParams = field()
    

@dataclass
class DcimPowerOutletsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
