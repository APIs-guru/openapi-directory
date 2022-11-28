from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetResourcesJSONQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesJSONRequest:
    query_params: GetResourcesJSONQueryParams = field()
    

@dataclass
class GetResourcesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    resource_wrappeds: Optional[List[Any]] = field(default=None)
    
