from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesSourcesJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesSourcesJSONRequest:
    query_params: GetResourcesSourcesJSONQueryParams = field()
    

@dataclass
class GetResourcesSourcesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    source_wrappeds: Optional[List[shared.SourceWrapped]] = field(default=None)
    
