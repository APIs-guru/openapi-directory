from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReferencesAircraftByAircraftCodeGetPathParams:
    aircraft_code: str = field(metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAircraftByAircraftCodeGetRequest:
    headers: ReferencesAircraftByAircraftCodeGetHeaders = field()
    path_params: ReferencesAircraftByAircraftCodeGetPathParams = field()
    query_params: ReferencesAircraftByAircraftCodeGetQueryParams = field()
    security: ReferencesAircraftByAircraftCodeGetSecurity = field()
    

@dataclass
class ReferencesAircraftByAircraftCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    references_aircraft_by_aircraft_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
