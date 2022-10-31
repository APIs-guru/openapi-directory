from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReferencesAirportsByAirportCodeGetPathParams:
    airport_code: str = field(default=None, metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetQueryParams:
    l_hoperated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'LHoperated', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetRequest:
    path_params: ReferencesAirportsByAirportCodeGetPathParams = field(default=None)
    query_params: ReferencesAirportsByAirportCodeGetQueryParams = field(default=None)
    headers: ReferencesAirportsByAirportCodeGetHeaders = field(default=None)
    security: ReferencesAirportsByAirportCodeGetSecurity = field(default=None)
    

@dataclass
class ReferencesAirportsByAirportCodeGetResponse:
    airport_response: Optional[shared.AirportResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
