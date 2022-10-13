from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetFulfillmentsCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFulfillmentsCountJSONRequest:
    query_params: GetFulfillmentsCountJSONQueryParams = field(default=None)
    

@dataclass
class GetFulfillmentsCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
