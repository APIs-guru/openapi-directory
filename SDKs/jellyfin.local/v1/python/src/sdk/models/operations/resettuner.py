from dataclasses import dataclass, field



@dataclass
class ResetTunerPathParams:
    tuner_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tunerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetTunerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ResetTunerRequest:
    path_params: ResetTunerPathParams = field(default=None)
    security: ResetTunerSecurity = field(default=None)
    

@dataclass
class ResetTunerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
