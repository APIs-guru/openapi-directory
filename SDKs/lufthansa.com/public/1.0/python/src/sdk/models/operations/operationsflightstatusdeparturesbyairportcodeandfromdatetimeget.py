from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams:
    airport_code: str = field(metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest:
    headers: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders = field()
    path_params: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams = field()
    query_params: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams = field()
    security: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity = field()
    

@dataclass
class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse:
    content_type: str = field()
    status_code: int = field()
    operations_flightstatus_departures_by_airport_code_and_from_date_time_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
