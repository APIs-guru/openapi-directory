from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDQueryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDQueryQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueriesIDQueryRequest:
    path_params: GetQueriesIDQueryPathParams = field(default=None)
    query_params: GetQueriesIDQueryQueryParams = field(default=None)
    

@dataclass
class GetQueriesIDQueryResponse:
    content_type: str = field(default=None)
    get_queries_id_query_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
