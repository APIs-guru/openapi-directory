from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDAnswersIndexPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDAnswersIndexRequest:
    path_params: GetQueriesIDAnswersIndexPathParams = field()
    

@dataclass
class GetQueriesIDAnswersIndexResponse:
    content_type: str = field()
    status_code: int = field()
    get_queries_id_answers_index_200_application_json_any: Optional[Any] = field(default=None)
    
