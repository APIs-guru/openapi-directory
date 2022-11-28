from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams:
    destination: str = field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    origin: str = field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams:
    direct_flights: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'directFlights', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest:
    headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = field()
    path_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = field()
    query_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = field()
    security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = field()
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse:
    content_type: str = field()
    status_code: int = field()
    operations_schedules_from_date_time_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
