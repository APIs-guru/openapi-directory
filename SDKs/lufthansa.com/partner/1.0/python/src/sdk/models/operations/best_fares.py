from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BestFaresQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    origin: str = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    range: str = field(default=None, metadata={'query_param': { 'field_name': 'range', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = field(default=None, metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    trip_duration: str = field(default=None, metadata={'query_param': { 'field_name': 'trip-duration', 'style': 'form', 'explode': True }})
    

@dataclass
class BestFaresHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class BestFaresSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BestFaresRequest:
    query_params: BestFaresQueryParams = field(default=None)
    headers: BestFaresHeaders = field(default=None)
    security: BestFaresSecurity = field(default=None)
    

@dataclass
class BestFaresResponse:
    best_fares_200_application_json_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
