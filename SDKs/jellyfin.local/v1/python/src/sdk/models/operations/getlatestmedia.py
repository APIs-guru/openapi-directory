from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetLatestMediaPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestMediaQueryParams:
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_items: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'groupItems', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    include_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemTypes', 'style': 'form', 'explode': True }})
    is_played: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPlayed', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLatestMediaSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLatestMediaRequest:
    path_params: GetLatestMediaPathParams = field(default=None)
    query_params: GetLatestMediaQueryParams = field(default=None)
    security: GetLatestMediaSecurity = field(default=None)
    

@dataclass
class GetLatestMediaResponse:
    base_item_dtos: Optional[List[shared.BaseItemDto]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
