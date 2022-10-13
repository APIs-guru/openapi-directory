from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaMostPopularMediaFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatRequest:
    path_params: GetResourcesMediaMostPopularMediaFormatPathParams = field(default=None)
    query_params: GetResourcesMediaMostPopularMediaFormatQueryParams = field(default=None)
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatResponse:
    content_type: str = field(default=None)
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
