from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaMostPopularMediaFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatRequest:
    path_params: GetResourcesMediaMostPopularMediaFormatPathParams = field()
    query_params: GetResourcesMediaMostPopularMediaFormatQueryParams = field()
    

@dataclass
class GetResourcesMediaMostPopularMediaFormatResponse:
    content_type: str = field()
    status_code: int = field()
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    
