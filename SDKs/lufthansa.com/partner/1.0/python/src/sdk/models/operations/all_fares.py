from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AllFaresQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    destination: str = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    origin: str = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = field(default=None, metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class AllFaresHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class AllFaresSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AllFaresRequest:
    query_params: AllFaresQueryParams = field(default=None)
    headers: AllFaresHeaders = field(default=None)
    security: AllFaresSecurity = field(default=None)
    

@dataclass
class AllFaresResponse:
    all_fares_200_application_json_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
