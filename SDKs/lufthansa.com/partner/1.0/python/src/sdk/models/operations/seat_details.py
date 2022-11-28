from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SeatDetailsPathParams:
    aircraft_code: str = field(metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    cabin_code: str = field(metadata={'path_param': { 'field_name': 'cabinCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeatDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SeatDetailsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeatDetailsSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SeatDetailsRequest:
    headers: SeatDetailsHeaders = field()
    path_params: SeatDetailsPathParams = field()
    query_params: SeatDetailsQueryParams = field()
    security: SeatDetailsSecurity = field()
    

@dataclass
class SeatDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    seat_details_200_application_json_string: Optional[str] = field(default=None)
    
