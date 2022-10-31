from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LowestFaresQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    origin: str = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    travel_date: str = field(default=None, metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class LowestFaresHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class LowestFaresSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LowestFaresRequest:
    query_params: LowestFaresQueryParams = field(default=None)
    headers: LowestFaresHeaders = field(default=None)
    security: LowestFaresSecurity = field(default=None)
    

@dataclass
class LowestFaresResponse:
    content_type: str = field(default=None)
    lowest_fares_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
