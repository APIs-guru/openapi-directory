from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMediaFoldersQueryParams:
    is_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isHidden', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMediaFoldersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMediaFoldersRequest:
    query_params: GetMediaFoldersQueryParams = field(default=None)
    security: GetMediaFoldersSecurity = field(default=None)
    

@dataclass
class GetMediaFoldersResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
