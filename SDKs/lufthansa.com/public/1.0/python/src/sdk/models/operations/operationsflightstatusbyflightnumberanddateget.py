from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    flight_number: str = field(metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetRequest:
    headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders = field()
    path_params: OperationsFlightstatusByFlightNumberAndDateGetPathParams = field()
    query_params: OperationsFlightstatusByFlightNumberAndDateGetQueryParams = field()
    security: OperationsFlightstatusByFlightNumberAndDateGetSecurity = field()
    

@dataclass
class OperationsFlightstatusByFlightNumberAndDateGetResponse:
    content_type: str = field()
    status_code: int = field()
    operations_flightstatus_by_flight_number_and_date_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
