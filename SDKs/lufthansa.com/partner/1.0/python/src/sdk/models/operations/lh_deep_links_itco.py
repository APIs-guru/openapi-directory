from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class LhDeepLinksItcoQueryParams:
    catalogues: str = field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    fare: str = field(metadata={'query_param': { 'field_name': 'fare', 'style': 'form', 'explode': True }})
    fare_currency: str = field(metadata={'query_param': { 'field_name': 'fare-currency', 'style': 'form', 'explode': True }})
    lang: str = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    outbound_segments: str = field(metadata={'query_param': { 'field_name': 'outbound-segments', 'style': 'form', 'explode': True }})
    trackingid: str = field(metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    net_fare: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'net-fare', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    return_segments: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-segments', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class LhDeepLinksItcoHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class LhDeepLinksItcoSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LhDeepLinksItcoRequest:
    headers: LhDeepLinksItcoHeaders = field()
    query_params: LhDeepLinksItcoQueryParams = field()
    security: LhDeepLinksItcoSecurity = field()
    

@dataclass
class LhDeepLinksItcoResponse:
    content_type: str = field()
    status_code: int = field()
    lh_deep_links_itco_200_application_json_string: Optional[str] = field(default=None)
    
