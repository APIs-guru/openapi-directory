from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCountriesCountryCodeJSONPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeJSONRequest:
    path_params: GetCountriesCountryCodeJSONPathParams = field()
    query_params: GetCountriesCountryCodeJSONQueryParams = field()
    

@dataclass
class GetCountriesCountryCodeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    country: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
