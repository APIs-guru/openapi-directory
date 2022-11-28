from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDRequest:
    path_params: GetQueriesIDPathParams = field()
    

@dataclass
class GetQueriesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_queries_id_200_application_json_any: Optional[Any] = field(default=None)
    
