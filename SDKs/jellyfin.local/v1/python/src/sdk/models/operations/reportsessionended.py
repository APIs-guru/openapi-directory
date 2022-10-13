from dataclasses import dataclass, field



@dataclass
class ReportSessionEndedSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportSessionEndedRequest:
    security: ReportSessionEndedSecurity = field(default=None)
    

@dataclass
class ReportSessionEndedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
