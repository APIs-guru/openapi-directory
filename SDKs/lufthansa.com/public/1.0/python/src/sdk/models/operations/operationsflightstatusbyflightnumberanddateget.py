from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    flight_number: str = field(default=None, metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetRequest:
    path_params: OperationsFlightstatusByFlightNumberAndDateGetPathParams = field(default=None)
    query_params: OperationsFlightstatusByFlightNumberAndDateGetQueryParams = field(default=None)
    headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders = field(default=None)
    security: OperationsFlightstatusByFlightNumberAndDateGetSecurity = field(default=None)
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetResponse:
    content_type: str = field(default=None)
    operations_flightstatus_by_flight_number_and_date_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
