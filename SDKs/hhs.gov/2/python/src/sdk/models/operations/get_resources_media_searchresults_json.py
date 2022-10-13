from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaSearchResultsJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaSearchResultsJSONRequest:
    query_params: GetResourcesMediaSearchResultsJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesMediaSearchResultsJSONResponse:
    content_type: str = field(default=None)
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
