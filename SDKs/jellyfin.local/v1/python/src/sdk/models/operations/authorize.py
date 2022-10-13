from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AuthorizeQueryParams:
    code: str = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AuthorizeRequest:
    query_params: AuthorizeQueryParams = field(default=None)
    security: AuthorizeSecurity = field(default=None)
    

@dataclass
class AuthorizeResponse:
    authorize_200_application_json_boolean: Optional[bool] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
