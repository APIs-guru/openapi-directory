from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteProfilePathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteProfileRequest:
    path_params: DeleteProfilePathParams = field()
    security: DeleteProfileSecurity = field()
    

@dataclass
class DeleteProfileResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
