from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrdersCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersCountJSONRequest:
    query_params: GetOrdersCountJSONQueryParams = field()
    

@dataclass
class GetOrdersCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    
