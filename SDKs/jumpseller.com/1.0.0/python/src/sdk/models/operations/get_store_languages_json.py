from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetStoreLanguagesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStoreLanguagesJSONRequest:
    query_params: GetStoreLanguagesJSONQueryParams = field(default=None)
    

@dataclass
class GetStoreLanguagesJSONResponse:
    content_type: str = field(default=None)
    languages: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
