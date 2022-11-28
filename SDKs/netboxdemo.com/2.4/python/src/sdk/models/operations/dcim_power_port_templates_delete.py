from dataclasses import dataclass, field



@dataclass
class DcimPowerPortTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortTemplatesDeleteRequest:
    path_params: DcimPowerPortTemplatesDeletePathParams = field()
    

@dataclass
class DcimPowerPortTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
