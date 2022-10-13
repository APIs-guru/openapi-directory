from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    region_code: str = field(default=None, metadata={'path_param': { 'field_name': 'region_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONRequest:
    path_params: GetCountriesCountryCodeRegionsRegionCodeJSONPathParams = field(default=None)
    query_params: GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams = field(default=None)
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    region: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
