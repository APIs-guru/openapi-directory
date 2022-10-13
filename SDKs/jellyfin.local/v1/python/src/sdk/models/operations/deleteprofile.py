from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProfilePathParams:
    profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteProfileRequest:
    path_params: DeleteProfilePathParams = field(default=None)
    security: DeleteProfileSecurity = field(default=None)
    

@dataclass
class DeleteProfileResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
