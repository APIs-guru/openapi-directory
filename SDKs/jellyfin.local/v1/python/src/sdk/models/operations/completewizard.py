from dataclasses import dataclass, field



@dataclass
class CompleteWizardSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompleteWizardRequest:
    security: CompleteWizardSecurity = field(default=None)
    

@dataclass
class CompleteWizardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
