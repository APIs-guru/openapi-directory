from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPolicyPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserPolicyRequestsInput:
    user_policy: Optional[shared.UserPolicyInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_policy1: Optional[shared.UserPolicyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_policy2: Optional[shared.UserPolicyInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserPolicySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserPolicyRequest:
    path_params: UpdateUserPolicyPathParams = field()
    request: UpdateUserPolicyRequestsInput = field()
    security: UpdateUserPolicySecurity = field()
    

@dataclass
class UpdateUserPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
