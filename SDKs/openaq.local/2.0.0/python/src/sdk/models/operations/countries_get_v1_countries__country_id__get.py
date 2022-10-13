from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CountriesGetV1CountriesCountryIDGetPathParams:
    country_id: str = field(default=None, metadata={'path_param': { 'field_name': 'country_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountriesGetV1CountriesCountryIDGetQueryParams:
    country: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[shared.CountriesOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class CountriesGetV1CountriesCountryIDGetRequest:
    path_params: CountriesGetV1CountriesCountryIDGetPathParams = field(default=None)
    query_params: CountriesGetV1CountriesCountryIDGetQueryParams = field(default=None)
    

@dataclass
class CountriesGetV1CountriesCountryIDGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    open_aq_countries_result: Optional[shared.OpenAqCountriesResult] = field(default=None)
    status_code: int = field(default=None)
    
