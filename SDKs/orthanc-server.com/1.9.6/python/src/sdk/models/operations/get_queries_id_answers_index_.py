from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDAnswersIndexPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDAnswersIndexRequest:
    path_params: GetQueriesIDAnswersIndexPathParams = field(default=None)
    

@dataclass
class GetQueriesIDAnswersIndexResponse:
    content_type: str = field(default=None)
    get_queries_id_answers_index_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
