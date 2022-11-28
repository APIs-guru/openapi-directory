from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetCountriesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCountriesJSONRequest:
    query_params: GetCountriesJSONQueryParams = field()
    

@dataclass
class GetCountriesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    countries: Optional[List[Any]] = field(default=None)
    
