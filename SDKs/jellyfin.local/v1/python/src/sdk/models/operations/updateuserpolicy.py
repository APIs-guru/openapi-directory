from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPolicyPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserPolicyRequests:
    user_policy: Optional[shared.UserPolicy] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_policy1: Optional[shared.UserPolicy] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_policy2: Optional[shared.UserPolicy] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserPolicySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserPolicyRequest:
    path_params: UpdateUserPolicyPathParams = field(default=None)
    request: UpdateUserPolicyRequests = field(default=None)
    security: UpdateUserPolicySecurity = field(default=None)
    

@dataclass
class UpdateUserPolicyResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
