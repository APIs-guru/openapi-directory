from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetQueryJSONQueryParams:
    date_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    elevation: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'elevation', 'style': 'form', 'explode': True }})
    facets: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    latitude: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    longitude: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sw', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryJSONRequest:
    query_params: GetQueryJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetQueryJSON200ApplicationJSON:
    results: Optional[List[shared.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GetQueryJSONResponse:
    content_type: str = field(default=None)
    get_query_json_200_application_json_object: Optional[GetQueryJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
