from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCountriesCountryCodeJSONPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeJSONRequest:
    path_params: GetCountriesCountryCodeJSONPathParams = field(default=None)
    query_params: GetCountriesCountryCodeJSONQueryParams = field(default=None)
    

@dataclass
class GetCountriesCountryCodeJSONResponse:
    content_type: str = field(default=None)
    country: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
