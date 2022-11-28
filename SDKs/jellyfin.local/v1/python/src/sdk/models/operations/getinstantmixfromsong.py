from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetInstantMixFromSongPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstantMixFromSongQueryParams:
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstantMixFromSongSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetInstantMixFromSongRequest:
    path_params: GetInstantMixFromSongPathParams = field()
    query_params: GetInstantMixFromSongQueryParams = field()
    security: GetInstantMixFromSongSecurity = field()
    

@dataclass
class GetInstantMixFromSongResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
