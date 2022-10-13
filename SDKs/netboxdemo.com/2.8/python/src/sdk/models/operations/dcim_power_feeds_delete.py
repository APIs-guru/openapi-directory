from dataclasses import dataclass, field



@dataclass
class DcimPowerFeedsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsDeleteRequest:
    path_params: DcimPowerFeedsDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerFeedsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
