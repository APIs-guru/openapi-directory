from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LhDeepLinksFfpQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    lang: str = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    trackingid: str = field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = field(default=None, metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class LhDeepLinksFfpHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class LhDeepLinksFfpSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LhDeepLinksFfpRequest:
    query_params: LhDeepLinksFfpQueryParams = field(default=None)
    headers: LhDeepLinksFfpHeaders = field(default=None)
    security: LhDeepLinksFfpSecurity = field(default=None)
    

@dataclass
class LhDeepLinksFfpResponse:
    content_type: str = field(default=None)
    lh_deep_links_ffp_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
