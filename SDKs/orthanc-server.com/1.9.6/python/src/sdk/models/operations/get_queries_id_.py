from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDRequest:
    path_params: GetQueriesIDPathParams = field(default=None)
    

@dataclass
class GetQueriesIDResponse:
    content_type: str = field(default=None)
    get_queries_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
