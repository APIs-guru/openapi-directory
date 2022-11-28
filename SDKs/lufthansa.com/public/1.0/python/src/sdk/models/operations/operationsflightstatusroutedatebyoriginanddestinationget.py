from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams:
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest:
    headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders = field()
    path_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams = field()
    query_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams = field()
    security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity = field()
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse:
    content_type: str = field()
    status_code: int = field()
    operations_flightstatus_route_date_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
