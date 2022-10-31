from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams:
    airport_code: str = field(default=None, metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(default=None, metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest:
    path_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams = field(default=None)
    query_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams = field(default=None)
    headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders = field(default=None)
    security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity = field(default=None)
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse:
    content_type: str = field(default=None)
    operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
