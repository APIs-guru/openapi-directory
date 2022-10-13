from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReferencesAircraftByAircraftCodeGetPathParams:
    aircraft_code: str = field(default=None, metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetRequest:
    path_params: ReferencesAircraftByAircraftCodeGetPathParams = field(default=None)
    query_params: ReferencesAircraftByAircraftCodeGetQueryParams = field(default=None)
    headers: ReferencesAircraftByAircraftCodeGetHeaders = field(default=None)
    security: ReferencesAircraftByAircraftCodeGetSecurity = field(default=None)
    

@dataclass
class ReferencesAircraftByAircraftCodeGetResponse:
    content_type: str = field(default=None)
    references_aircraft_by_aircraft_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
