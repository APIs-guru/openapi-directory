from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams:
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date_time: str = field(default=None, metadata={'path_param': { 'field_name': 'fromDateTime', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams:
    direct_flights: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'directFlights', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest:
    path_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = field(default=None)
    query_params: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = field(default=None)
    headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = field(default=None)
    security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = field(default=None)
    

@dataclass
class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse:
    content_type: str = field(default=None)
    operations_schedules_from_date_time_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
