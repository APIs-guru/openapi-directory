from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserViewsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserViewsQueryParams:
    include_external_content: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeExternalContent', 'style': 'form', 'explode': True }})
    include_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeHidden', 'style': 'form', 'explode': True }})
    preset_views: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'presetViews', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserViewsRequest:
    path_params: GetUserViewsPathParams = field(default=None)
    query_params: GetUserViewsQueryParams = field(default=None)
    

@dataclass
class GetUserViewsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
