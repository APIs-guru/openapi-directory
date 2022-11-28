from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetFulfillmentsCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentsCountJSONRequest:
    query_params: GetFulfillmentsCountJSONQueryParams = field()
    

@dataclass
class GetFulfillmentsCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    
