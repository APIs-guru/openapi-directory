from dataclasses import dataclass, field



@dataclass
class DcimPowerOutletTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesDeleteRequest:
    path_params: DcimPowerOutletTemplatesDeletePathParams = field()
    

@dataclass
class DcimPowerOutletTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
