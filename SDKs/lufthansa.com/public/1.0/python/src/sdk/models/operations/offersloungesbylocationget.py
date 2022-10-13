from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OffersLoungesByLocationGetPathParams:
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersLoungesByLocationGetQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabinClass', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    tier_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tierCode', 'style': 'form', 'explode': True }})
    

@dataclass
class OffersLoungesByLocationGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OffersLoungesByLocationGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OffersLoungesByLocationGetRequest:
    path_params: OffersLoungesByLocationGetPathParams = field(default=None)
    query_params: OffersLoungesByLocationGetQueryParams = field(default=None)
    headers: OffersLoungesByLocationGetHeaders = field(default=None)
    security: OffersLoungesByLocationGetSecurity = field(default=None)
    

@dataclass
class OffersLoungesByLocationGetResponse:
    content_type: str = field(default=None)
    offers_lounges_by_location_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
