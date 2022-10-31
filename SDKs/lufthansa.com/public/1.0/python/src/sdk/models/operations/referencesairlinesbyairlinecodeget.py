from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReferencesAirlinesByAirlineCodeGetPathParams:
    airline_code: str = field(default=None, metadata={'path_param': { 'field_name': 'airlineCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetRequest:
    path_params: ReferencesAirlinesByAirlineCodeGetPathParams = field(default=None)
    query_params: ReferencesAirlinesByAirlineCodeGetQueryParams = field(default=None)
    headers: ReferencesAirlinesByAirlineCodeGetHeaders = field(default=None)
    security: ReferencesAirlinesByAirlineCodeGetSecurity = field(default=None)
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetResponse:
    content_type: str = field(default=None)
    references_airlines_by_airline_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
