from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeepLinksQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    destination_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destination-name', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    fare: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare', 'style': 'form', 'explode': True }})
    fare_currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-currency', 'style': 'form', 'explode': True }})
    lang: str = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    net_fare: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'net-fare', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    origin_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'origin-name', 'style': 'form', 'explode': True }})
    outbound_segments: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outbound-segments', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    return_segments: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-segments', 'style': 'form', 'explode': True }})
    trackingid: str = field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class DeepLinksHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeepLinksSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeepLinksRequest:
    query_params: DeepLinksQueryParams = field(default=None)
    headers: DeepLinksHeaders = field(default=None)
    security: DeepLinksSecurity = field(default=None)
    

@dataclass
class DeepLinksResponse:
    content_type: str = field(default=None)
    deep_links_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
