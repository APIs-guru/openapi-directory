from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TopOndQueryParams:
    catalogues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    

@dataclass
class TopOndHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TopOndSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TopOndRequest:
    headers: TopOndHeaders = field()
    query_params: TopOndQueryParams = field()
    security: TopOndSecurity = field()
    

@dataclass
class TopOndResponse:
    content_type: str = field()
    status_code: int = field()
    top_ond_200_application_json_string: Optional[str] = field(default=None)
    
