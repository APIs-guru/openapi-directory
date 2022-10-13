from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRootFolderPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRootFolderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRootFolderRequest:
    path_params: GetRootFolderPathParams = field(default=None)
    security: GetRootFolderSecurity = field(default=None)
    

@dataclass
class GetRootFolderResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
