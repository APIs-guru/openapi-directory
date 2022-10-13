from dataclasses import dataclass, field



@dataclass
class DcimPowerPortTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortTemplatesDeleteRequest:
    path_params: DcimPowerPortTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerPortTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
