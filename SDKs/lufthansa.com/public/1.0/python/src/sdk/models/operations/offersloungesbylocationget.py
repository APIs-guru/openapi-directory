from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OffersLoungesByLocationGetPathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersLoungesByLocationGetQueryParams:
    cabin_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabinClass', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    tier_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tierCode', 'style': 'form', 'explode': True }})
    

@dataclass
class OffersLoungesByLocationGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersLoungesByLocationGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OffersLoungesByLocationGetRequest:
    headers: OffersLoungesByLocationGetHeaders = field()
    path_params: OffersLoungesByLocationGetPathParams = field()
    query_params: OffersLoungesByLocationGetQueryParams = field()
    security: OffersLoungesByLocationGetSecurity = field()
    

@dataclass
class OffersLoungesByLocationGetResponse:
    content_type: str = field()
    status_code: int = field()
    offers_lounges_by_location_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
