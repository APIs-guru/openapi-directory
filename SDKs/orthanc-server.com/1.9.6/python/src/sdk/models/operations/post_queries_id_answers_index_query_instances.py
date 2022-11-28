from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDAnswersIndexQueryInstancesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDAnswersIndexQueryInstancesRequest:
    path_params: PostQueriesIDAnswersIndexQueryInstancesPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostQueriesIDAnswersIndexQueryInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    post_queries_id_answers_index_query_instances_200_application_json_any: Optional[Any] = field(default=None)
    
