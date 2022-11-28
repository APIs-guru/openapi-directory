from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDAnswersPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDAnswersQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueriesIDAnswersRequest:
    path_params: GetQueriesIDAnswersPathParams = field()
    query_params: GetQueriesIDAnswersQueryParams = field()
    

@dataclass
class GetQueriesIDAnswersResponse:
    content_type: str = field()
    status_code: int = field()
    get_queries_id_answers_200_application_json_any: Optional[Any] = field(default=None)
    
