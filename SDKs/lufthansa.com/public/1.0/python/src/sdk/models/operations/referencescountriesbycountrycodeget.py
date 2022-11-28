from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReferencesCountriesByCountryCodeGetPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetRequest:
    headers: ReferencesCountriesByCountryCodeGetHeaders = field()
    path_params: ReferencesCountriesByCountryCodeGetPathParams = field()
    query_params: ReferencesCountriesByCountryCodeGetQueryParams = field()
    security: ReferencesCountriesByCountryCodeGetSecurity = field()
    

@dataclass
class ReferencesCountriesByCountryCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    references_countries_by_country_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
