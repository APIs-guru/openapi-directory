from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams:
    airport_code: str = field(default=None, metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(default=None, metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest:
    path_params: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams = field(default=None)
    query_params: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams = field(default=None)
    headers: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders = field(default=None)
    security: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity = field(default=None)
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse:
    content_type: str = field(default=None)
    operations_flightstatus_departures_by_airport_code_and_from_date_time_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
