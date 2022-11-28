from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ReportSessionEndedSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportSessionEndedRequest:
    security: ReportSessionEndedSecurity = field()
    

@dataclass
class ReportSessionEndedResponse:
    content_type: str = field()
    status_code: int = field()
    
