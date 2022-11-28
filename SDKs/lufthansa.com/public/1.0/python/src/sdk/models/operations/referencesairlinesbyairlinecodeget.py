from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReferencesAirlinesByAirlineCodeGetPathParams:
    airline_code: str = field(metadata={'path_param': { 'field_name': 'airlineCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetRequest:
    headers: ReferencesAirlinesByAirlineCodeGetHeaders = field()
    path_params: ReferencesAirlinesByAirlineCodeGetPathParams = field()
    query_params: ReferencesAirlinesByAirlineCodeGetQueryParams = field()
    security: ReferencesAirlinesByAirlineCodeGetSecurity = field()
    

@dataclass
class ReferencesAirlinesByAirlineCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    references_airlines_by_airline_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
