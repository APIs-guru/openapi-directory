from dataclasses import dataclass, field



@dataclass
class DcimPowerOutletTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesDeleteRequest:
    path_params: DcimPowerOutletTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerOutletTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
