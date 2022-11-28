from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserViewsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserViewsQueryParams:
    include_external_content: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeExternalContent', 'style': 'form', 'explode': True }})
    include_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeHidden', 'style': 'form', 'explode': True }})
    preset_views: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'presetViews', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserViewsRequest:
    path_params: GetUserViewsPathParams = field()
    query_params: GetUserViewsQueryParams = field()
    

@dataclass
class GetUserViewsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
