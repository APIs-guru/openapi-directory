from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDAnswersIndexContentPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDAnswersIndexContentQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueriesIDAnswersIndexContentRequest:
    path_params: GetQueriesIDAnswersIndexContentPathParams = field()
    query_params: GetQueriesIDAnswersIndexContentQueryParams = field()
    

@dataclass
class GetQueriesIDAnswersIndexContentResponse:
    content_type: str = field()
    status_code: int = field()
    get_queries_id_answers_index_content_200_application_json_any: Optional[Any] = field(default=None)
    
