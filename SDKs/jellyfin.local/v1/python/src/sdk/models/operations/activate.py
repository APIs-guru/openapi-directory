from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ActivateSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ActivateRequest:
    security: ActivateSecurity = field(default=None)
    

@dataclass
class ActivateResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
