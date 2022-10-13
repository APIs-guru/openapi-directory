from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ValidatePathRequests:
    validate_path_dto: Optional[shared.ValidatePathDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    validate_path_dto1: Optional[shared.ValidatePathDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    validate_path_dto2: Optional[shared.ValidatePathDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ValidatePathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ValidatePathRequest:
    request: ValidatePathRequests = field(default=None)
    security: ValidatePathSecurity = field(default=None)
    

@dataclass
class ValidatePathResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
