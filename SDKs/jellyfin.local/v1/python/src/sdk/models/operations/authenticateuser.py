from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AuthenticateUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticateUserQueryParams:
    pw: str = field(metadata={'query_param': { 'field_name': 'pw', 'style': 'form', 'explode': True }})
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthenticateUserRequest:
    path_params: AuthenticateUserPathParams = field()
    query_params: AuthenticateUserQueryParams = field()
    

@dataclass
class AuthenticateUserResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_result: Optional[shared.AuthenticationResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
