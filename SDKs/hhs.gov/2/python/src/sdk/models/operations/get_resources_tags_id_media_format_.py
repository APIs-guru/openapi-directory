from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsIDMediaFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDMediaFormatQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDMediaFormatRequest:
    path_params: GetResourcesTagsIDMediaFormatPathParams = field(default=None)
    query_params: GetResourcesTagsIDMediaFormatQueryParams = field(default=None)
    

@dataclass
class GetResourcesTagsIDMediaFormatResponse:
    content_type: str = field(default=None)
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
