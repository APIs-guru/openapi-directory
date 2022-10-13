from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TopOndQueryParams:
    catalogues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    

@dataclass
class TopOndHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class TopOndSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TopOndRequest:
    query_params: TopOndQueryParams = field(default=None)
    headers: TopOndHeaders = field(default=None)
    security: TopOndSecurity = field(default=None)
    

@dataclass
class TopOndResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    top_ond_200_application_json_string: Optional[str] = field(default=None)
    
