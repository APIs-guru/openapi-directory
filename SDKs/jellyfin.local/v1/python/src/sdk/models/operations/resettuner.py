from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ResetTunerPathParams:
    tuner_id: str = field(metadata={'path_param': { 'field_name': 'tunerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetTunerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ResetTunerRequest:
    path_params: ResetTunerPathParams = field()
    security: ResetTunerSecurity = field()
    

@dataclass
class ResetTunerResponse:
    content_type: str = field()
    status_code: int = field()
    
