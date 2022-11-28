from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CitiesGetv1V1CitiesGetQueryParams:
    city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    entity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[shared.CitiesOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class CitiesGetv1V1CitiesGetRequest:
    query_params: CitiesGetv1V1CitiesGetQueryParams = field()
    

@dataclass
class CitiesGetv1V1CitiesGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    open_aq_cities_result: Optional[shared.OpenAqCitiesResult] = field(default=None)
    
