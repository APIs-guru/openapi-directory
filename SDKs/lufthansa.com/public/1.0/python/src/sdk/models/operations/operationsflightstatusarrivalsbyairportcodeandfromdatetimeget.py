from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams:
    airport_code: str = field(metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest:
    headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders = field()
    path_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams = field()
    query_params: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams = field()
    security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity = field()
    

@dataclass
class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse:
    content_type: str = field()
    status_code: int = field()
    operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
