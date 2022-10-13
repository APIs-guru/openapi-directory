from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetCountriesCountryCodeRegionsJSONPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeRegionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeRegionsJSONRequest:
    path_params: GetCountriesCountryCodeRegionsJSONPathParams = field(default=None)
    query_params: GetCountriesCountryCodeRegionsJSONQueryParams = field(default=None)
    

@dataclass
class GetCountriesCountryCodeRegionsJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    regions: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
