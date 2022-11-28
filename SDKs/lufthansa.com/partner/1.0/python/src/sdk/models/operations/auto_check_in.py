from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AutoCheckInPathParams:
    ticketnumber: str = field(metadata={'path_param': { 'field_name': 'ticketnumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AutoCheckInQueryParams:
    email_address: str = field(metadata={'query_param': { 'field_name': 'emailAddress', 'style': 'form', 'explode': True }})
    

@dataclass
class AutoCheckInHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AutoCheckInSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AutoCheckInRequest:
    headers: AutoCheckInHeaders = field()
    path_params: AutoCheckInPathParams = field()
    query_params: AutoCheckInQueryParams = field()
    security: AutoCheckInSecurity = field()
    

@dataclass
class AutoCheckInResponse:
    content_type: str = field()
    status_code: int = field()
    auto_check_in_200_application_json_string: Optional[str] = field(default=None)
    
