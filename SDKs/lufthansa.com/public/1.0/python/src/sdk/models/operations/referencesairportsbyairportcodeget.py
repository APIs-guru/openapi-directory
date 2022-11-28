from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReferencesAirportsByAirportCodeGetPathParams:
    airport_code: str = field(metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetQueryParams:
    l_hoperated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'LHoperated', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirportsByAirportCodeGetRequest:
    headers: ReferencesAirportsByAirportCodeGetHeaders = field()
    path_params: ReferencesAirportsByAirportCodeGetPathParams = field()
    query_params: ReferencesAirportsByAirportCodeGetQueryParams = field()
    security: ReferencesAirportsByAirportCodeGetSecurity = field()
    

@dataclass
class ReferencesAirportsByAirportCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    airport_response: Optional[shared.AirportResponse] = field(default=None)
    
