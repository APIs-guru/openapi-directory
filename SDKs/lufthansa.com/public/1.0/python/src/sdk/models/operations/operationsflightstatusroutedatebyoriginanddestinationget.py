from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest:
    path_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams = field(default=None)
    query_params: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams = field(default=None)
    headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders = field(default=None)
    security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity = field(default=None)
    

@dataclass
class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse:
    content_type: str = field(default=None)
    operations_flightstatus_route_date_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
