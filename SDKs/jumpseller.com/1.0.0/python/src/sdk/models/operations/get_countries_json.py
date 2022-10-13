from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetCountriesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesJSONRequest:
    query_params: GetCountriesJSONQueryParams = field(default=None)
    

@dataclass
class GetCountriesJSONResponse:
    content_type: str = field(default=None)
    countries: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
