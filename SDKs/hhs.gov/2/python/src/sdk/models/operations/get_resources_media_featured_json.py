from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaFeaturedJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaFeaturedJSONRequest:
    query_params: GetResourcesMediaFeaturedJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesMediaFeaturedJSONResponse:
    content_type: str = field(default=None)
    media_items: Optional[List[shared.MediaItem]] = field(default=None)
    status_code: int = field(default=None)
    
