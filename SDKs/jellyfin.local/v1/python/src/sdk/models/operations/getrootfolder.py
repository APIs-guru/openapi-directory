from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRootFolderPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRootFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRootFolderRequest:
    path_params: GetRootFolderPathParams = field()
    security: GetRootFolderSecurity = field()
    

@dataclass
class GetRootFolderResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    
