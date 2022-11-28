from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class LowestFaresQueryParams:
    catalogues: str = field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    destination: str = field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    origin: str = field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    travel_date: str = field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class LowestFaresHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class LowestFaresSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LowestFaresRequest:
    headers: LowestFaresHeaders = field()
    query_params: LowestFaresQueryParams = field()
    security: LowestFaresSecurity = field()
    

@dataclass
class LowestFaresResponse:
    content_type: str = field()
    status_code: int = field()
    lowest_fares_200_application_json_string: Optional[str] = field(default=None)
    
