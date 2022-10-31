from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeatDetailsPathParams:
    aircraft_code: str = field(default=None, metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    cabin_code: str = field(default=None, metadata={'path_param': { 'field_name': 'cabinCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeatDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SeatDetailsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeatDetailsSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SeatDetailsRequest:
    path_params: SeatDetailsPathParams = field(default=None)
    query_params: SeatDetailsQueryParams = field(default=None)
    headers: SeatDetailsHeaders = field(default=None)
    security: SeatDetailsSecurity = field(default=None)
    

@dataclass
class SeatDetailsResponse:
    content_type: str = field(default=None)
    seat_details_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
