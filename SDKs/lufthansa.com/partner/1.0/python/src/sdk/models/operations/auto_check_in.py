from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AutoCheckInPathParams:
    ticketnumber: str = field(default=None, metadata={'path_param': { 'field_name': 'ticketnumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AutoCheckInQueryParams:
    email_address: str = field(default=None, metadata={'query_param': { 'field_name': 'emailAddress', 'style': 'form', 'explode': True }})
    

@dataclass
class AutoCheckInHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class AutoCheckInSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AutoCheckInRequest:
    path_params: AutoCheckInPathParams = field(default=None)
    query_params: AutoCheckInQueryParams = field(default=None)
    headers: AutoCheckInHeaders = field(default=None)
    security: AutoCheckInSecurity = field(default=None)
    

@dataclass
class AutoCheckInResponse:
    auto_check_in_200_application_json_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
