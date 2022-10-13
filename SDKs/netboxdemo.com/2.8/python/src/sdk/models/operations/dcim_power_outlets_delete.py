from dataclasses import dataclass, field



@dataclass
class DcimPowerOutletsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsDeleteRequest:
    path_params: DcimPowerOutletsDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerOutletsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
