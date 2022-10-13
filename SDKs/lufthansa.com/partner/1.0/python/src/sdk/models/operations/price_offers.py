from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PriceOffersPathParams:
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class PriceOffersQueryParams:
    departure_date: str = field(default=None, metadata={'query_param': { 'field_name': 'departureDate', 'style': 'form', 'explode': True }})
    return_date: str = field(default=None, metadata={'query_param': { 'field_name': 'returnDate', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclass
class PriceOffersSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PriceOffersRequest:
    path_params: PriceOffersPathParams = field(default=None)
    query_params: PriceOffersQueryParams = field(default=None)
    security: PriceOffersSecurity = field(default=None)
    

@dataclass
class PriceOffersResponse:
    content_type: str = field(default=None)
    price_offers_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
