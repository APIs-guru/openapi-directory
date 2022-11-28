from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'country_code', 'style': 'simple', 'explode': False }})
    region_code: str = field(metadata={'path_param': { 'field_name': 'region_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONRequest:
    path_params: GetCountriesCountryCodeRegionsRegionCodeJSONPathParams = field()
    query_params: GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams = field()
    

@dataclass
class GetCountriesCountryCodeRegionsRegionCodeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    region: Optional[Any] = field(default=None)
    
