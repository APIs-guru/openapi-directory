from dataclasses import dataclass, field



@dataclass
class CancelTimerPathParams:
    timer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CancelTimerRequest:
    path_params: CancelTimerPathParams = field(default=None)
    security: CancelTimerSecurity = field(default=None)
    

@dataclass
class CancelTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
