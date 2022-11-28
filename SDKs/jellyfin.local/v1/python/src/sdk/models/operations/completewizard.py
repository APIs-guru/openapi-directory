from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CompleteWizardSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompleteWizardRequest:
    security: CompleteWizardSecurity = field()
    

@dataclass
class CompleteWizardResponse:
    content_type: str = field()
    status_code: int = field()
    
