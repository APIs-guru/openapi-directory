from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReferencesCountriesByCountryCodeGetPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesCountriesByCountryCodeGetRequest:
    path_params: ReferencesCountriesByCountryCodeGetPathParams = field(default=None)
    query_params: ReferencesCountriesByCountryCodeGetQueryParams = field(default=None)
    headers: ReferencesCountriesByCountryCodeGetHeaders = field(default=None)
    security: ReferencesCountriesByCountryCodeGetSecurity = field(default=None)
    

@dataclass
class ReferencesCountriesByCountryCodeGetResponse:
    content_type: str = field(default=None)
    references_countries_by_country_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
