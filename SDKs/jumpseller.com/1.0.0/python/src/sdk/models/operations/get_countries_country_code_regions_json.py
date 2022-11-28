from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetCountriesCountryCodeRegionsJSONPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeRegionsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeRegionsJSONRequest:
    path_params: GetCountriesCountryCodeRegionsJSONPathParams = field()
    query_params: GetCountriesCountryCodeRegionsJSONQueryParams = field()
    

@dataclass
class GetCountriesCountryCodeRegionsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    regions: Optional[List[Any]] = field(default=None)
    
