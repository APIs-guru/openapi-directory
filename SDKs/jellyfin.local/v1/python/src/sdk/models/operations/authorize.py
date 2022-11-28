from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AuthorizeQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AuthorizeRequest:
    query_params: AuthorizeQueryParams = field()
    security: AuthorizeSecurity = field()
    

@dataclass
class AuthorizeResponse:
    content_type: str = field()
    status_code: int = field()
    authorize_200_application_json_boolean: Optional[bool] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
