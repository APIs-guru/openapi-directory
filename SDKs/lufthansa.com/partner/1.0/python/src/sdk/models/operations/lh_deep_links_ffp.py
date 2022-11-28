from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class LhDeepLinksFfpQueryParams:
    catalogues: str = field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    lang: str = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    trackingid: str = field(metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class LhDeepLinksFfpHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class LhDeepLinksFfpSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LhDeepLinksFfpRequest:
    headers: LhDeepLinksFfpHeaders = field()
    query_params: LhDeepLinksFfpQueryParams = field()
    security: LhDeepLinksFfpSecurity = field()
    

@dataclass
class LhDeepLinksFfpResponse:
    content_type: str = field()
    status_code: int = field()
    lh_deep_links_ffp_200_application_json_string: Optional[str] = field(default=None)
    
