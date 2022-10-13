from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AuthenticateUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticateUserQueryParams:
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    pw: str = field(default=None, metadata={'query_param': { 'field_name': 'pw', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthenticateUserRequest:
    path_params: AuthenticateUserPathParams = field(default=None)
    query_params: AuthenticateUserQueryParams = field(default=None)
    

@dataclass
class AuthenticateUserResponse:
    authentication_result: Optional[shared.AuthenticationResult] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
