from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OndStatusQueryParams:
    catalogues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    new_routes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'new-routes', 'style': 'form', 'explode': True }})
    old_routes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'old-routes', 'style': 'form', 'explode': True }})
    

@dataclass
class OndStatusHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OndStatusSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OndStatusRequest:
    query_params: OndStatusQueryParams = field(default=None)
    headers: OndStatusHeaders = field(default=None)
    security: OndStatusSecurity = field(default=None)
    

@dataclass
class OndStatusResponse:
    content_type: str = field(default=None)
    ond_status_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
