from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDAnswersIndexQuerySeriesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDAnswersIndexQuerySeriesRequest:
    path_params: PostQueriesIDAnswersIndexQuerySeriesPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostQueriesIDAnswersIndexQuerySeriesResponse:
    content_type: str = field()
    status_code: int = field()
    post_queries_id_answers_index_query_series_200_application_json_any: Optional[Any] = field(default=None)
    
