from dataclasses import dataclass, field



@dataclass
class DcimPowerFeedsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsDeleteRequest:
    path_params: DcimPowerFeedsDeletePathParams = field()
    

@dataclass
class DcimPowerFeedsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
